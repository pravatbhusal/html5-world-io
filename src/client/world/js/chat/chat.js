// emit a chat message to the server
function sendChat(data) {
	socket.emit("chat", data);
}