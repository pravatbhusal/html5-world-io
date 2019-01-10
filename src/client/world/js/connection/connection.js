socket = io.connect("localhost:5000");

// listen for the connected emit from the server
socket.on("user_connected", function(data) {
	console.log(data);
});

// listen for the disconnected emit from the server
socket.on("user_disconnected", function(data) {
	console.log(data);
});