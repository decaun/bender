import asyncio
import json
import logging
import websockets
import random
from kafka import KafkaProducer
from kafka.errors import KafkaError

logging.basicConfig()

STATE = {
    "type": "USERS_LIST",
    "users": []
}

USERS = dict()

producer = KafkaProducer(bootstrap_servers=['localhost:9092'],
        value_serializer=lambda m: json.dumps(m).encode('utf-8'),
        retries=5)

async def kafka_loop(topic,message,producer=producer):
    def on_send_success(record_metadata):
        print(record_metadata.topic)
        print(record_metadata.partition)
        print(record_metadata.offset)

    def on_send_error(excp):
        log.error('I am an errback', exc_info=excp)
    # handle exception

    try:
        producer.send(topic, message).add_callback(on_send_success).add_errback(on_send_error)
    finally:
        pass



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
        try:
            await asyncio.wait([user.send(message) for user in USERS.keys() if user != sender])
        except Exception as ex:
            print(ex)
            pass


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
                await kafka_loop("messages",data)
                
                await update_messages(websocket, data)
                
            else:
                logging.error("unsupported event: {}", data)
    finally:
        await unregister(websocket)


start_server = websockets.serve(counter, "localhost", 8989)

asyncio.ensure_future(start_server)
asyncio.get_event_loop().run_forever()
