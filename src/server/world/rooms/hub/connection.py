from flask import request
from flask_socketio import emit, join_room, leave_room
import json
import random

# a list containing all connected clients to this room
clients = []


# handle the connections of clients
def handle_connections(socketio, namespace):
    # listen to a connection from a client
    @socketio.on('connect', namespace=namespace)
    def connect():
        join_room(namespace)
        user = request.sid
        data = {'sessionId': user, 'x': random.randint(53, 725), 'y': random.randint(150, 600)}
        data_json = json.dumps(data)
        clients.append(data)
        clients_json = json.dumps(clients)
        emit('start_session', clients_json, room=namespace)
        emit('user_connected', data_json, broadcast=True, room=namespace, include_self=False)

    # listen to a disconnection from a client
    @socketio.on('disconnect', namespace=namespace)
    def disconnect():
        leave_room(namespace)
        user = request.sid
        client_details = get_client_details(user)
        del clients[client_details['index']]
        emit('user_disconnected', user, broadcast=True, room=namespace, include_self=False)


# return the client and its index position in the clients Array
def get_client_details(session_id):
    index = 0
    for client in clients:
        if client['sessionId'] == session_id:
            client_details = {'index': index, 'clientObj': client}
            return client_details
        index += 1
