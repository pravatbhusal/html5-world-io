# socket events
from src.server.world.python.connection.connection import handle_connections
from src.server.world.python.chat.chat import handle_chat

# third parties
from flask import Flask
from flask_socketio import SocketIO


# service class
class Serv:

    # serve constructor
    def __init__(self, host='localhost', port='5000', debug=True, secret_key='s0Qi0mweln'):
        self.host = host
        self.port = port
        self.debug = debug
        self.secret_key = secret_key

    # initiate and return the server application
    def initiate_app(self):
        app = Flask(__name__)
        app.config['SECRET_KEY'] = self.secret_key
        app.debug = self.debug
        return app

    # initiate and return the socketio handler
    def initiate_socketio(self, app):
        socketio = SocketIO(app)
        return socketio

    # run the socket server
    def run_server(self, app, socketio):
        socketio.run(app, self.host, self.port)


# socket events
def socket_events(socketio):
    handle_connections(socketio)
    handle_chat(socketio)


# start the service
if __name__ == "__main__":
    # initiate the server
    server = Serv()
    app = server.initiate_app()
    socketio = server.initiate_socketio(app)

    # handle socket events
    socket_events(socketio)

    # run the server
    server.run_server(app, socketio)
