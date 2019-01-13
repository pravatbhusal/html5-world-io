import sys

sys.path.append('../')

# socket events
from src.server.world.rooms import initiate_rooms

# third parties
from flask import Flask
from flask_socketio import SocketIO
import json


# service class
class Serv:

    # serve constructor
    def __init__(self, host, port, debug, secret_key):
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
        socketio = SocketIO(app, ping_timeout=2, ping_interval=0.5)
        return socketio

    # run the socket server
    def run_server(self, app, socketio):
        socketio.run(app, self.host, self.port)


# socket events
def socket_events(socketio):
    initiate_rooms(socketio)


# start the service
if __name__ == "__main__":
    # load serve configuration file
    with open('../etc/serve.json') as serve_configs:
        config = json.load(serve_configs)

        # initiate the server
        server = Serv(host=config["host"], port=config["port"],
                      debug=config["debug"], secret_key=config["secret_key"])
        app = server.initiate_app()
        socketio = server.initiate_socketio(app)

        # handle socket events
        socket_events(socketio)

        # run the server
        server.run_server(app, socketio)
