from flask import request
from flask_socketio import emit
import json
import random

# a list containing all connected clients
clients = []

# handle the connections of clients
def handle_connections(socketio):
    # listen to a connection from a client
    @socketio.on('connect')
    def connect():
        user = request.sid
        data = {'sessionId': user, 'x': random.randint(53, 725), 'y': random.randint(150, 600)}
        data_json = json.dumps(data)
        clients.append(data)
        clients_json = json.dumps(clients)
        emit('start_session', clients_json)
        emit('user_connected', data_json, broadcast=True, include_self=False)

    # listen to a disconnection from a client
    @socketio.on('disconnect')
    def disconnect():
        user = request.sid
        client_details = get_client_details(user)
        del clients[client_details['index']]
        emit('user_disconnected', user, broadcast=True, include_self=True)


# return the client and its index position in the clients Array
def get_client_details(session_id):
    index = 0
    for client in clients:
        if client['sessionId'] == session_id:
            client_details = {'index': index, 'clientObj': client}
            return client_details
        index += 1
