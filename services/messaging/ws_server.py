import asyncio
import json
import logging
import websockets

logging.basicConfig()

STATE={
    "type":"USERS_LIST",
    "users":[]
}


USERS = set()
USERZ=dict()

def join_event():
    STATE['users']=list(USERZ.values())
    print(STATE)
    return json.dumps(STATE)


def message_event(data):
    
    return json.dumps({"type": "ADD_MESSAGE", "message": data['message'],"author":data['author']})


async def update_users():
    if USERS:  # asyncio.wait doesn't accept an empty list
        
        message = join_event()
        await asyncio.wait([user.send(message) for user in USERS])


async def update_messages(sender,data):
    if USERS:  # asyncio.wait doesn't accept an empty list
        message = message_event(data)
        await asyncio.wait([user.send(message) for user in USERS if user!=sender])


async def register(websocket):
    USERS.add(websocket)
    USERZ.update({websocket:[]})
    #await update_messages()


async def unregister(websocket):
    USERS.remove(websocket)
    del USERZ[websocket]
    STATE['users'].pop()
    print('deleted')
    #await update_messages()
    await update_users()


async def counter(websocket, path):
    # register(websocket) sends user_event() to websocket
    await register(websocket)
    try:
        #await websocket.send(join_event())
        async for message in websocket:
            data = json.loads(message)
            if data["type"] == "ADD_USER":
                USERZ[websocket]=({"name":data['name'],"id":len(USERZ)})
                #STATE['users'].append({"name":data['name'],"id":len(USERS)+1})
                #print(json.dumps(list(USERZ.values())))
                await update_users()
            elif data["type"] == "ADD_MESSAGE":
                await update_messages(websocket,data)
                pass
            else:
                logging.error("unsupported event: {}", data)
    finally:
        await unregister(websocket)


start_server = websockets.serve(counter, "localhost", 8989)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()