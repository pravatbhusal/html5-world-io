from src.server.world.rooms.hub.connection import handle_connections
from src.server.world.rooms.hub.chat import handle_chat

# namespace and room route
namespace = '/rooms/hub'


# handle the connections of all rooms
def initiate_hub(socketio):
    handle_connections(socketio, namespace)
    handle_chat(socketio, namespace)
