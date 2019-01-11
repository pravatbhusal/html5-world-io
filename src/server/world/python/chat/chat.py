from flask_socketio import emit


# handle the chats of the clients
def handle_chat(socketio):
    # listen to a chat emit from a client
    @socketio.on('chat')
    def chat(data):
        emit('chat', data, broadcast=True)
