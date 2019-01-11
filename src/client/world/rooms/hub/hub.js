(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// name
	this.name_txt = new cjs.Text("Anon", "16px 'Franklin Gothic Demi'");
	this.name_txt.name = "name_txt";
	this.name_txt.textAlign = "center";
	this.name_txt.lineHeight = 20;
	this.name_txt.lineWidth = 100;
	this.name_txt.parent = this;
	this.name_txt.setTransform(22.6,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.name_txt).wait(1));

	// player
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.659)").s().p("AigCiQhDhEAAheQAAheBDhCQBChDBeAAQBeAABDBDQBDBCAABeQAABehDBEQhDBCheAAQheAAhChCg");
	this.shape.setTransform(22.8,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Character, new cjs.Rectangle(-29.4,-26.2,104,71.9), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.329)").s().p("A1LOEIAA8HMAqWAAAIAAcHg");
	this.shape.setTransform(135.6,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,271.1,180), null);


// stage content:
(lib.hub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		socket = io.connect("localhost:5000/rooms/hub");
		
		// listen for the start session emit from the server
		socket.on("start_session", function (data, clients) {
			data = JSON.parse(data);
			startSession(data)
		});
		
		// listen for the user connected emit from the server
		socket.on("user_connected", function (data) {
			// load a new user's character
			data = JSON.parse(data);
			loadCharacter(data);
		});
		
		// listen for the user disconnected emit from the server
		socket.on("user_disconnected", function (sessionId) {
			unloadCharacter(sessionId);
		});
		
		// listen for the chat emit from the server
		socket.on("chat", function (data) {
			console.log(data);
		});
		var thisCanvas = this;
		
		// start the session of this client
		function startSession(data) {
			// this new user's session id is the last element of data
			var DATA_INDEXES = data.length - 1;
			self = data[DATA_INDEXES];
			sessionId = self.sessionId;
			
			// set clients Array
			clients = data;
		
			// load all characters that this new user needs to view
			loadCharacters(data, self);
		}
		
		// load a character
		function loadCharacter(client) {
			var character = new lib.Character();
			character.x = client.x;
			character.y = client.y;
			
			// update clients Array
			client.clip = character;
			clients.push(client);
			
			// change text of the client
			var idString = "Id #" + clients.length;
			character.name_txt.text = "Anon (" + idString + ")";
			
			// add client
			thisCanvas.addChild(character);
		}
		
		// load all characters
		function loadCharacters(clients, self) {
			var CLIENTS_LENGTH = clients.length;
			for (var client = 0; client < CLIENTS_LENGTH; client++) {
				// add each client from the clients Array
				var clientObj = clients[client];
				var character = new lib.Character();
				character.x = clientObj.x;
				character.y = clientObj.y;
				
				// update clients Array
				clientObj.clip = character;
				
				// change text if this client is self
				var idString = "Id #" + (client + 1);
				if(clientObj == self) {
					character.name_txt.text = "You (" + idString + ")";
					character.name_txt.color = "red";
				} else {
					character.name_txt.text = "Anon (" + idString + ")";
				}
				thisCanvas.addChild(character);
			}
		}
		
		// return the client and its index position in the clients Array
		function getClientDetails(sessionId) {
			var CLIENTS_LENGTH = clients.length;
			for(var client = 0; client < CLIENTS_LENGTH; client++) {
				var clientObj = clients[client];
				if(clientObj.sessionId == sessionId) {
					// found the client
					var clientDetails = {"index": client, "clientObj": clientObj};
					return clientDetails;
				}
			}
		}
		
		// unload the disconnected character
		function unloadCharacter(sessionId) {
			var clientDetails = getClientDetails(sessionId);
			thisCanvas.removeChild(clientDetails.clientObj.clip);
			clients.splice(clientDetails.index, 1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// display_text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6699CC").s().p("AACBVIgyAAIgBgHIAegHQAFgBAAgFIAAghIAAgeIgBg/IglgEIgBgIIBIgMIACABQgCAhAAAiIAAAqIAAAoQAAAEAFACIAdAHIABAHIg0AAg");
	this.shape.setTransform(732.3,59.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699CC").s().p("AgPAPQgGgFAAgKQAAgJAGgGQAGgFAJgBQAJABAHAFQAGAGAAAJQAAAKgGAFQgHAHgJgBQgJABgGgHg");
	this.shape_1.setTransform(721.8,65.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6699CC").s().p("Ag+BBQgYgXAAgoQAAgpAZgYQAYgZAnABQAngBAXAXQAWAWAAAoQAAAqgYAZQgZAZgmAAQgmAAgXgYgAgkg4QgMASAAAkQABAkANAUQAMAVAXgBQAYABAMgTQALgSAAgmQABgkgNgTQgNgSgXgBQgZAAgLASg");
	this.shape_2.setTransform(707.1,59.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AgPAPQgGgFAAgKQAAgJAGgGQAGgFAJgBQAJABAHAFQAGAGAAAJQAAAKgGAFQgHAHgJgBQgJABgGgHg");
	this.shape_3.setTransform(692.4,65.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699CC").s().p("Ag+BBQgYgXABgoQgBgpAZgYQAZgZAmABQAngBAWAXQAYAWgBAoQABAqgZAZQgYAZgnAAQgmAAgXgYgAgkg4QgMASAAAkQAAAkANAUQANAVAXgBQAYABAMgTQAMgSAAgmQgBgkgNgTQgMgSgXgBQgYAAgMASg");
	this.shape_4.setTransform(677.6,59.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6699CC").s().p("AgPAPQgGgFAAgKQAAgJAGgGQAGgFAJgBQAJABAHAFQAGAGAAAJQAAAKgGAFQgHAHgJgBQgJABgGgHg");
	this.shape_5.setTransform(662.9,65.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6699CC").s().p("AgkAOIgghOQgDgGgFgCIgRgFIAAgIIAoABIAogBIAAAIIgVAGQAPAqATAvIAJAYIAJgYQARgoASgxIgVgGIgBgIIAfABIAggBIAAAIIgSAFQgEACgDAFIghBOIgdBHIgOACIgdhIg");
	this.shape_6.setTransform(652.5,59.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6699CC").s().p("AgyBCQgZgXAAgoQAAgoAXgZQAXgaAlAAQAhAAARATQASAUAAAhIAAALIhyAAQAAAmASARQATAQAmAAQARAAAUgDIABAIQgPAJgRAFQgQAEgOAAQgnAAgYgXgAgYg6QgMAPgBAXIBMAAIAAgGQAAgagIgLQgIgLgQAAQgUAAgLAQg");
	this.shape_7.setTransform(627.6,59.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6699CC").s().p("ABuBWIgnAAIgBgHIASgFQAFgCAAgEIAAgLIAAhOQAAgXgLgKQgKgJgTAAQgVAAgRANQACAIAAALIAABAIAAAiQABAFAEACIATAFIAAAHIgoAAIgnAAIAAgHIARgFQAFgCAAgEIAAgLIAAhOQAAgXgKgKQgKgJgUAAQgRAAgTALIAABNIABAqQAAAFADACIATAFIABAHIgoAAIgrAAIgBgHIAVgGQAFgCAAgEIABgWIAAg9IgBgsIgZgGIgBgHQAegGAcgGIACAAIAAAWQAdgXAcABQAgAAANAZQAdgZAiAAQAaAAAOAOQAOAOAAAaIAABAIAAAiQABAEAEACIAUAGIAAAHIgqAAg");
	this.shape_8.setTransform(602.6,59);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6699CC").s().p("AAXBGQgYATgXAAQgZAAgRgNQgPgMAAgXQAAgcAZgNQAZgMA0AAIAAgOQABgVgKgKQgLgJgVAAQgQAAgZAGIgFgMQAkgQAbAAQAbAAAQAPQAQAOAAAcIAABKIAAAPQABAGACADQACADAGABIAOABIABAHIgTAHQgMADgEAAQgRAAgHgTgAgeAJQgOAIABATQgBARAKAHQAJAHAQAAQAQAAAOgGIAAg8QglAAgOAIg");
	this.shape_9.setTransform(577.6,59.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6699CC").s().p("AhOBjQgmgiAAg8QAAg/AnglQAoglBCAAQAeAAAgAIIABABIgLA7IgIABIgMgvQgWgGgUAAQgsAAgaAeQgZAgAAA2QAAA1AcAhQAbAfAuAAQAQAAAPgDIAAgxIAAgRIAAgNQAAgEgFgCIgWgHIAAgIIAsABIArgBIABAIIgUAGQgFABAAAFIAAAOIAAAQIAAA7IgBABQglAJgfAAQg/gBgmghg");
	this.shape_10.setTransform(555.9,55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6699CC").s().p("AgyBCQgZgXAAgoQAAgoAXgZQAXgaAlAAQAhAAARATQASAUAAAhIAAALIhyAAQAAAmASARQATAQAmAAQARAAAUgDIABAIQgPAJgRAFQgQAEgOAAQgnAAgYgXgAgYg6QgMAPgBAXIBMAAIAAgGQAAgagIgLQgIgLgQAAQgUAAgLAQg");
	this.shape_11.setTransform(525.3,59.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6699CC").s().p("AA6BWIgoAAIAAgHIASgFQAEgCAAgEIAAgLIAAhOQAAgXgLgKQgKgJgUAAQgSAAgUALIAABNIAAAqQAAAFAFACIATAFIAAAHIgpAAIgpAAIgBgHIAVgGQAEgCAAgEIABgWIAAg9IgCgsIgXgGIgBgHQAegGAbgGIACAAIAAAWQAfgXAbABQAZAAAPAOQAPAPAAAaIAAA/IAAAiQABAEAEACIAUAGIABAHIgqAAg");
	this.shape_12.setTransform(505.6,59);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6699CC").s().p("AAACAIgpABIgBgIIAVgGQAEgBAAgEIABgYIAAg9IgBgrIgYgGIgBgHQAggGAagGIABABIgBAzIAABGIABAeQAAAFAFABIAUAGIABAIIgrgBgAgRhbQgFgGAAgJQAAgKAFgGQAHgGAJAAQAIAAAGAGQAGAFgBAJQAAAKgFAGQgHAGgIAAQgJAAgGgFg");
	this.shape_13.setTransform(489.4,54.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6699CC").s().p("AAACJIgpAAIgBgHIAVgHQAEgBABgEIAAguIAAhKIgBhsIgYgIIgBgFQAggHAagGIACABQgBAeAAA0IAAB2IAAA0QABAFAEABIAUAHIABAHIgrAAg");
	this.shape_14.setTransform(478.9,53.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6699CC").s().p("AA6BWIgoAAIgBgHIASgFQAFgCAAgEIAAgLIAAhOQAAgXgKgKQgLgJgUAAQgTAAgTALIAABNIABAqQAAAFADACIAUAFIAAAHIgpAAIgqAAIgBgHIAWgGQAEgCAAgEIAAgWIAAg9IgBgsIgYgGIgBgHQAfgGAbgGIACAAIAAAWQAggXAaABQAaAAAOAOQAPAPAAAaIAAA/IABAiQgBAEAFACIAUAGIAAAHIgpAAg");
	this.shape_15.setTransform(463,59);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6699CC").s().p("AhhBiQgigjAAg8QABg+AjglQAkgkA/AAQA9AAAhAiQAiAiAAA7QAAA+gkAmQgkAmg/AAQg8AAgigjgAhGhZQgUAcAAA7QAAA6AYAfQAXAgAtAAQAvAAAVgdQAWgcgBg+QAAg4gWgfQgYgfguAAQgwAAgVAdg");
	this.shape_16.setTransform(437,54.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6699CC").s().p("AhIBwQAygBAegVQAfgVAAgiQAAgbgSgPQgTgPggAAQgQAAgRAFIgBgCIAKhqIA2ABIBCgBIABABIgEAeIhmgCIgFAzQAPgDAOAAQAoAAAYAVQAYAUAAAiQAAAtgpAbQgnAag/ABg");
	this.shape_17.setTransform(404,63.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6699CC").s().p("AAAB/IgtAAIgtAAIAAgIIAVgGQAFgCABgEIAAgQIAAgUIAAiSIAAgRIAAgNQAAgFgFgCIgWgHIAAgHIAtAAIAtAAIAAAHIgXAHQgEABAAAFIAAASIAAAMIAACTIAAAnIBXAAIAYgwIAIgBIgFBBIgBABIhWAAg");
	this.shape_18.setTransform(385.4,54.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6699CC").s().p("AhnhWIAACcIAAAkQAAAFAFACIAUAGIAAAIIgkgBIglABIgBgIIAWgHQAFgBAAgEIABglIAAiSIgBgeQAAgFgEgBIgXgHIAAgIIAlABIAhgBIBTDGIBUjGIAfABIAkgBIABAIIgXAHQgEABAAAFIgBAeIAACSIABAlQAAAEAFABIAVAHIABAIIgugBIgqABIgBgIIAVgGQAEgCAAgFIABgkIAAicIhaDUIgNACg");
	this.shape_19.setTransform(357.5,54.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6699CC").s().p("AAAB/IgxAAIgBgIIAbgIQAEgBABgEIAAgjIAAi1IhAAAIgQAxIgIABIgEhBIABgBIBWAAIAvAAIBWAAIABABIgLBAIgIABIgLgyIhAAAIAAC1IAAAjQAAAEAFABIAbAIIAAAIIgxAAg");
	this.shape_20.setTransform(329.6,54.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6699CC").s().p("ABTB/IgqAAIgBgIIAVgGQAEgBABgFIAAgkIAAhGIiDAAIAABGIAAAkQAAAFAFABIAUAGIABAIIgsAAIgtAAIAAgIIAWgGQAFgCAAgEIAAgkIAAiSIAAgeQAAgFgFgCIgWgHIAAgHIAtAAIArAAIABAHIgVAHQgFABAAAEIAAAfIAAA+ICDAAIAAg+IAAgfQgBgEgEgBIgUgHIgBgHIAsAAIAsAAIABAHIgXAHQgEACAAAFIAAAeIAACSIAAAkQAAAEAFACIAWAGIAAAIIguAAg");
	this.shape_21.setTransform(303.3,54.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6699CC").s().p("AAACJIgpAAIgBgHIAVgHQAEgBABgEIAAguIAAhKIgBhsIgYgIIgBgFQAggHAagGIACABQgBAeAAA0IAAB2IAAA0QABAFAEABIAUAHIABAHIgrAAg");
	this.shape_22.setTransform(274.2,53.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6699CC").s().p("AAXBGQgZATgXAAQgZAAgPgNQgQgMAAgXQAAgcAagNQAYgMA0AAIAAgOQABgVgLgKQgKgJgVAAQgQAAgaAGIgDgMQAjgQAbAAQAbAAARAPQAQAOgBAcIgBBKIAAAPQABAGADADQADADAFABIAOABIABAHIgTAHQgLADgFAAQgRAAgHgTgAgdAJQgOAIgBATQAAARAJAHQAKAHAQAAQARAAANgGIAAg8QgkAAgOAIg");
	this.shape_23.setTransform(260.2,59.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6699CC").s().p("AgYBjQgKgLAAgVIABhuIgZgHIgBgHIAbgCIANgsIATgGIACACIgBApIAAAGIA3AAIAAASIg3AAIgBBiQAAATAFAHQAGAHAQAAQAMAAAUgDIABAIQgfAQgZAAQgTAAgJgLg");
	this.shape_24.setTransform(244.5,57);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6699CC").s().p("AA6BWIgoAAIgBgHIASgFQAFgCAAgEIAAgLIAAhOQAAgXgKgKQgLgJgUAAQgTAAgTALIAABNIAAAqQAAAFAFACIATAFIAAAHIgpAAIgpAAIgCgHIAWgGQAEgCAAgEIAAgWIAAg9IgBgsIgXgGIgCgHQAfgGAbgGIACAAIAAAWQAfgXAbABQAaAAAOAOQAPAPAAAaIAAA/IABAiQgBAEAFACIAUAGIABAHIgqAAg");
	this.shape_25.setTransform(227.3,59);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6699CC").s().p("AgyBCQgZgXAAgoQAAgoAXgZQAXgaAlAAQAhAAARATQASAUAAAhIAAALIhyAAQAAAmASARQATAQAmAAQARAAAUgDIABAIQgPAJgRAFQgQAEgOAAQgnAAgYgXgAgYg6QgMAPgBAXIBMAAIAAgGQAAgagIgLQgIgLgQAAQgUAAgLAQg");
	this.shape_26.setTransform(207.4,59.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6699CC").s().p("ABvBWIgoAAIgBgHIASgFQAEgCABgEIAAgLIAAhOQAAgXgLgKQgJgJgVAAQgUAAgRANQACAIAAALIAABAIAAAiQABAFAEACIATAFIAAAHIgoAAIgnAAIAAgHIARgFQAFgCAAgEIAAgLIAAhOQAAgXgKgKQgKgJgUAAQgRAAgTALIAABNIAAAqQAAAFAEACIAUAFIAAAHIgpAAIgqAAIgBgHIAWgGQAEgCAAgEIAAgWIAAg9IgBgsIgYgGIgBgHQAfgGAbgGIACAAIAAAWQAdgXAbABQAhAAANAZQAegZAhAAQAaAAAOAOQAOAOAAAaIAABAIAAAiQABAEAEACIAUAGIAAAHIgpAAg");
	this.shape_27.setTransform(182.5,59);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6699CC").s().p("AAACAIgpABIgBgIIAVgGQAEgBAAgEIABgYIAAg9IgBgrIgYgGIgBgHQAggGAagGIABABIgBAzIAABGIABAeQAAAFAFABIAUAGIABAIIgrgBgAgRhbQgFgGAAgJQAAgKAFgGQAGgGAKAAQAIAAAGAGQAGAFgBAJQAAAKgFAGQgHAGgIAAQgJAAgGgFg");
	this.shape_28.setTransform(161,54.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6699CC").s().p("AgTBWIgqAAIgBgHIAVgGQAEgCAAgEIABgWIAAg9IgBgsIgYgGIgBgHQAegGAcgGIABAAIAAAWQAhgXAgABIABAAIgKA4IgHACQgGgQgEgIQgFgKgKAAQgKAAgOAJIAABNIABApQAAAFADABIAYAHIABAHIgtAAg");
	this.shape_29.setTransform(148.8,59);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6699CC").s().p("AgyBCQgZgXAAgoQAAgoAXgZQAXgaAlAAQAhAAARATQASAUAAAhIAAALIhyAAQAAAmASARQATAQAmAAQARAAAUgDIABAIQgPAJgRAFQgQAEgOAAQgnAAgYgXgAgYg6QgMAPgBAXIBMAAIAAgGQAAgagIgLQgIgLgQAAQgUAAgLAQg");
	this.shape_30.setTransform(132.6,59.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6699CC").s().p("AgyCCIgqABIgBgIIAVgHQAEAAABgFIAAgoIAAhJIgBhlIgYgHIgBgHQAfgGAbgGIACAAIAAATQAcgTAZAAQAigBAUAXQAUAXAAAkQAAAtgaAZQgaAZguAAQgOAAgPgDIAAAoIAAAaQAAAFAFABIAYAHIAAAIIgugBgAghhkIAACAQAQADAOABQAdgBAPgSQAQgTAAgiQAAgigPgRQgOgRgbAAQgTABgPAHg");
	this.shape_31.setTransform(112.9,63.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6699CC").s().p("AAuBUIgiAAIgBgHIAQgEIghg3IglA3IAPAEIABAHIgaAAIghAAIAAgHIARgEQAGgDAFgFQAUgbAXgjIgrhCQgDgGgGgCIgQgFIgBgIIApABIAjgBIAAAIIgQAFIAeAyIAigyIgPgFIgBgIIAbABIAegBIABAIIgRAFQgFABgEAFIgpA7IAuBHQAEAFAGACIAQAFIAAAHIgpAAg");
	this.shape_32.setTransform(94.3,59.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6699CC").s().p("AgBB/IgrAAIgtAAIgBgIIAXgGQAEgCAAgEIABgQIAAgUIAAiSIAAgRIgBgNQABgFgFgCIgXgHIAAgHIAtAAIAsAAIBWAAIABABIgLA4IgHABIgLgqIhUAAIAABkIARAAIApAAQAFAAACgFIAFgYIAKgBIAAAmIAAAkIgKABIgGgZQgCgFgDAAIgqAAIgRAAIAABCIABAnIBWAAIAWguIAIgBIgDA/IgCABIhWAAg");
	this.shape_33.setTransform(74.6,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.background = new lib.background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(426,370.8,2.751,2.952,0,0,0,135.6,90);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	// disclaimer
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6699CC").s().p("AA6CJIgoAAIgBgHIASgGQAEgBABgEIABgMIAAhPQgBgXgKgIQgLgJgUAAQgSAAgUAIIAABRIABApQAAAFAEABIATAGIABAHIgqAAIgqAAIgBgHIAVgHQAFgBAAgEIAAgsIAAhMIAAhBIgBgrIgYgIIgBgFIA8gNIACABIgBAxIgBBIQAggVAaAAQAaAAAOAOQAPAOAAAbIAABAIABAhQgBAFAFABIAUAHIAAAHIgpAAg");
	this.shape_34.setTransform(794.1,688.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6699CC").s().p("AgxBCQgYgXAAgmQABgpAagaQAagaApAAQAaAAAZALQgFAYgFAaIgHABIgPgsQgIgDgKAAQgbAAgPATQgQATAAAfQAAAkASARQARASAkAAQASAAATgEIABAIQgKAHgRAGQgRAFgQAAQgmAAgYgXg");
	this.shape_35.setTransform(774.7,693.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6699CC").s().p("AhICAIgBgHQAUgEAJgJQAMgNAYg2IACgDIgDgBIg7iRQgDgFgGgCIgQgFIAAgIIAoABIAngBIABAIIgWAGIAQAqIATAwIAIAXIALgbIAQgqIARgsIgUgGIgBgIIAfABIAggBIABAIIgRAFQgGABgDAGIgOAiQgYA4gNAjQgIAYgGAaIgKAsQgCAJgEAEQgGAFgSAAIgkgBg");
	this.shape_36.setTransform(757.7,698.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6699CC").s().p("Ag+BOQAGgYAEgXIAHgBIAOAnQAJAEARAAQAQAAAKgHQAJgGABgNQAAgMgHgGQgHgHgPgFIgSgGQgYgIgJgLQgKgLAAgSQAAgXATgOQARgOAdAAQAbAAAXAIIgKAsIgGABIgMgiQgKgDgMAAQgRAAgKAGQgKAHAAALQAAALAGAHQAHAGASAGIAPAFQAZAJALAKQAMALAAASQAAAZgUAOQgTAPgdAAQgcAAgdgLg");
	this.shape_37.setTransform(741.4,693.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6699CC").s().p("AAVAhIgQgqIgFgTIgHASIgRArIgSAzIgQABIgchMIgdhJQgDgHgGgCIgNgEIAAgHIAmAAIApAAIABAHIgWAGQAMApATAxIAHAWIAHgVIAXg8IANgrIANgBIAOAsIAVA7IAIAWIAHgVQAUgzANgoIgUgGIAAgHIAeAAIAdAAIACAHIgPAEQgGACgDAHIgeBJIgdBLIgQABIgTg0g");
	this.shape_38.setTransform(720.2,693.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6699CC").s().p("Ag+BBQgXgYAAgnQAAgnAYgZQAYgaAoAAQAlAAAXAYQAXAXAAAmQAAApgZAZQgZAaglAAQgmAAgXgYgAgkg3QgMASAAAkQAAAhANAVQAMAWAYAAQAYAAAMgTQAMgTAAglQAAghgNgUQgMgUgYAAQgXAAgNASg");
	this.shape_39.setTransform(697.4,693.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6699CC").s().p("AAjB2QgdAVgZAAQgiAAgUgXQgUgYAAgjQAAgtAbgYQAagZAvAAQAMAAAOADIAAhOIgZgIIgBgGQAhgGAbgGIABABIgBBUIAABhIAAAyIABAPQABAFACAEQADACAFACIAOABIABAHIgUAGQgLADgEAAQgSAAgGgVgAgogDQgQAQAAAkQAAAfAPATQAOATAaAAQAQAAASgKIAAh9QgMgEgPAAQgdAAgRASg");
	this.shape_40.setTransform(677.1,688.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6699CC").s().p("AAXBGQgZATgWAAQgaAAgQgNQgPgMAAgXQAAgcAZgNQAZgMA1AAIAAgOQAAgVgKgKQgLgJgVAAQgQAAgZAGIgFgMQAkgQAbAAQAbAAAQAPQAQAOAAAcIAABKIAAAPQAAAGADADQACADAGABIAOABIABAHIgTAHQgMADgDAAQgSAAgHgTgAgeAJQgNAIAAATQAAARAJAHQAJAHAQAAQAQAAAOgGIABg8QgmAAgOAIg");
	this.shape_41.setTransform(657.6,693.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6699CC").s().p("AA6CJIgoAAIAAgHIASgGQAEgBAAgEIAAgMIAAhPQABgXgMgIQgKgJgUAAQgSAAgUAIIAABRIAAApQAAAFAFABIATAGIAAAHIgpAAIgpAAIgBgHIAUgHQAFgBAAgEIABgsIAAhMIAAhBIgCgrIgYgIIAAgFIA6gNIACABIgBAxIAABIQAggVAaAAQAaAAAOAOQAPAOAAAbIAABAIAAAhQABAFAEABIAVAHIAAAHIgqAAg");
	this.shape_42.setTransform(637.9,688.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6699CC").s().p("AhRB6IgBgCIAJg9IAIgCIAMA0QAUAIAUAAQAaAAAPgMQAPgMAAgXQABgLgGgJQgEgJgJgGIgSgMIgVgKIgZgMQgMgFgKgIQgJgJgGgMQgGgMAAgRQAAghAcgSQAbgSAoAAQAcAAAgAHIABABIgLA5IgHABIgMgtQgSgGgRAAQgXAAgOALQgOAMAAAVQAAALAFAJQAFAJAIAHQAJAHALAFIAUAKIAZAMQALAFAKAIQAKAIAGAMQAFALAAAPQAAAlgcATQgcATgsAAQgdAAgjgKg");
	this.shape_43.setTransform(618,689.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6699CC").s().p("AhICAIgBgHQAUgEAKgJQALgNAZg2IABgDIgCgBIg8iRQgDgFgGgCIgQgFIgBgIIAqABIAmgBIABAIIgVAGIAPAqIATAwIAIAXIALgbIARgqIAQgsIgVgGIAAgIIAfABIAfgBIABAIIgRAFQgFABgDAGIgOAiQgYA4gMAjQgJAYgHAaIgJAsQgCAJgFAEQgFAFgSAAIgkgBg");
	this.shape_44.setTransform(590.5,698.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6699CC").s().p("AhDCBIABg8IAAhqIgBhLIgZgIIgBgGQAegFAdgHIACABIgBBSIAAAlQAdgTAYAAQAiAAAUAXQAUAVAAAlQAAAtgZAZQgbAZgrAAQgfAAgjgKgAghgHIAAB+QAPAFAPAAQAdAAAQgTQAPgTAAgjQAAgggOgSQgOgQgcAAQgRAAgRAIg");
	this.shape_45.setTransform(571.2,688.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6699CC").s().p("AAjB2QgdAVgZAAQgiAAgUgXQgUgYAAgjQAAgtAbgYQAagZAvAAQAMAAAOADIAAhOIgZgIIgBgGQAhgGAbgGIABABIgBBUIAABhIAAAyIABAPQABAFACAEQADACAFACIAOABIABAHIgUAGQgLADgEAAQgSAAgGgVgAgogDQgQAQAAAkQAAAfAPATQAOATAaAAQAQAAASgKIAAh9QgMgEgPAAQgdAAgRASg");
	this.shape_46.setTransform(541.6,688.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6699CC").s().p("AgyBCQgZgXAAgoQAAgoAXgZQAXgaAlAAQAhAAARATQASAUAAAhIAAALIhyAAQAAAmASARQATAQAmAAQARAAAUgDIABAIQgPAJgRAFQgQAEgOAAQgnAAgYgXgAgYg6QgMAPgBAXIBMAAIAAgGQAAgagIgLQgIgLgQAAQgUAAgLAQg");
	this.shape_47.setTransform(522.1,693.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6699CC").s().p("AgYBjQgLgLABgVIABhuIgZgHIgCgHIAcgCIAOgsIASgGIABACIAAApIAAAGIA2AAIAAASIg2AAIgBBiQAAATAFAHQAGAHAQAAQAMAAAUgDIACAIQggAQgZAAQgTAAgJgLg");
	this.shape_48.setTransform(507,691.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6699CC").s().p("AAXBGQgYATgYAAQgYAAgRgNQgPgMAAgXQAAgcAagNQAYgMA0AAIAAgOQABgVgLgKQgKgJgVAAQgQAAgZAGIgFgMQAkgQAbAAQAbAAAQAPQARAOgBAcIAABKIAAAPQABAGACADQACADAGABIAOABIABAHIgTAHQgMADgEAAQgRAAgHgTgAgeAJQgOAIABATQgBARAKAHQAJAHAQAAQARAAANgGIAAg8QglAAgOAIg");
	this.shape_49.setTransform(491.7,693.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6699CC").s().p("AgyBCQgZgXAAgoQAAgoAXgZQAXgaAlAAQAhAAARATQASAUAAAhIAAALIhyAAQAAAmASARQATAQAmAAQARAAAUgDIABAIQgPAJgRAFQgQAEgOAAQgnAAgYgXgAgYg6QgMAPgBAXIBMAAIAAgGQAAgagIgLQgIgLgQAAQgUAAgLAQg");
	this.shape_50.setTransform(473.9,693.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6699CC").s().p("AgTBWIgqAAIgBgHIAVgGQAEgCAAgDIABgXIAAg9IgBgsIgYgGIgBgHQAegGAcgGIABAAIAAAWQAhgXAgABIABAAIgKA4IgHACQgGgQgEgIQgFgKgKAAQgKAAgOAJIAABNIABApQAAAFADABIAYAHIABAHIgtAAg");
	this.shape_51.setTransform(458.6,693.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6699CC").s().p("AgxBCQgYgXABgmQgBgpAbgaQAbgaAoAAQAbAAAZALQgGAYgFAaIgHABIgPgsQgIgDgLAAQgaAAgPATQgPATAAAfQAAAkARARQARASAlAAQARAAAUgEIAAAIQgLAHgQAGQgRAFgRAAQgmAAgXgXg");
	this.shape_52.setTransform(442.8,693.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(478,393.4,758.5,692.3);
// library properties:
lib.properties = {
	id: '424F165964DD49449781DA66B2E13A92',
	width: 850,
	height: 735,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['424F165964DD49449781DA66B2E13A92'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;