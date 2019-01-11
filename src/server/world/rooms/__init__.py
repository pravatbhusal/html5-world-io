from src.server.world.rooms.hub import initiate_hub


# initiate all rooms
def initiate_rooms(socketio):
    initiate_hub(socketio)
