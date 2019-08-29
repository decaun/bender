# faust -A consumer worker -l info
import faust

app = faust.App(
    'message-consumer',
    broker='kafka://localhost:9092'
)

class Message(faust.Record):
    type: str
    id: int
    message: str
    author: str


messages_topic = app.topic('messages', value_type=Message)

@app.agent(messages_topic)
async def greet(messages):
    async for message in messages:
        print("ID: "+str(message.id)+" * "+message.author+" > "+message.message)