from flask import request
from flask_socketio import emit


# handle the connections of clients
def handle_connections(socketio):
    # listen to a connection from a client
    @socketio.on('connect')
    def connect():
        user = request.sid
        emit('user_connected', user + ' joined!', broadcast=True)

    # listen to a disconnection from a client
    @socketio.on('disconnect')
    def disconnect():
        user = request.sid
        emit('user_disconnected', user + ' left!', broadcast=True)
