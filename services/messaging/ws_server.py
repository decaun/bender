import asyncio
import json
import logging
import websockets
import random
from aiokafka import AIOKafkaProducer

logging.basicConfig()

STATE = {
    "type": "USERS_LIST",
    "users": []
}

USERS = dict()

async def kafka_loop(topic,message):
    loop = asyncio.get_event_loop()

    async def send_one(topic=topic,message=message):
        producer = AIOKafkaProducer(
            loop=loop, bootstrap_servers='localhost:9092',
            value_serializer=serializer,
            compression_type="gzip")
        # Get cluster layout and initial topic/partition leadership information
        await producer.start()
        try:
            # Produce message
            await producer.send_and_wait(topic, json.dumps(message).encode('utf-8'))
        finally:
            # Wait for all pending messages to be delivered or expire.
            await producer.stop()

    loop.run_until_complete(send_one())


def join_event():
    STATE['users'] = list(USERS.values())
    return json.dumps(STATE)


def message_event(data):
    
    return json.dumps({"type": "ADD_MESSAGE", "message": data['message'], "author": data['author']})


async def update_users():
    if USERS:  # asyncio.wait doesn't accept an empty list

        message = join_event()
        await asyncio.wait([user.send(message) for user in USERS.keys()])


async def update_messages(sender, data):
    if USERS:  # asyncio.wait doesn't accept an empty list
        message = message_event(data)
        await asyncio.wait([user.send(message) for user in USERS.keys() if user != sender])


async def register(websocket,data):
    USERS.update({websocket: {"name": data['name'], "id": random.randrange(10000)}})
    #print((max([d['id'] for d in list(USERS.values())])))
    # await update_messages() [len(USERS)+1 if len(USERS)+1 > max([d['id'] for d in list(USERS.values())]) else len(USERS)+2]


async def unregister(websocket):
    del USERS[websocket]
    # await update_messages()
    await update_users()


async def counter(websocket, path):
    # register(websocket) sends user_event() to websocket
    
    try:
        # await websocket.send(join_event())
        async for message in websocket:
            data = json.loads(message)
            
            if data["type"] == "ADD_USER":
                await register(websocket,data)
                # STATE['users'].append({"name":data['name'],"id":len(USERS)+1})
                # print(json.dumps(list(USERS.values())))
                await update_users()
                
            elif data["type"] == "ADD_MESSAGE":
                await update_messages(websocket, data)
                asyncio.run_coroutine_threadsafe(kafka_loop("greetings",data),asyncio.get_running_loop())
            else:
                logging.error("unsupported event: {}", data)
    finally:
        await unregister(websocket)


start_server = websockets.serve(counter, "localhost", 8989)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
