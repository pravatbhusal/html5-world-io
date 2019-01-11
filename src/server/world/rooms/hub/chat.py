from flask_socketio import emit


# handle the chats of the clients
def handle_chat(socketio, namespace):
    # listen to a chat emit from a client
    @socketio.on('chat', namespace=namespace)
    def chat(data):
        emit('chat', data, broadcast=True, namespace=namespace, include_self=True)
