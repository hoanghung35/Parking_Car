const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);


const port = 4000;

app.use(express.static("packingArea")); 

app.get("/dashboard", (req, res) => { // display method
    res.sendFile("./packingArea/home.html", { root: __dirname }); // read data then send to server
  });

server.listen(port, () =>
  console.log(`Server listening on port: ${port}`)
);


const mqtt = require("mqtt");

// Connect to mqtt
const options = {
  clientID: "",
  username: "",
  password: "",
  host: "192.168.0.102",
  port: 1883,
};

const mqttClient = mqtt.connect(options);

// setup the callbacks

mqttClient.on('connect', () => {
	console.log('✅ Connected to MQTT Broker');
  // Client sign up topic publish from Esp8266
	mqttClient.subscribe('myData', () => {
		mqttClient.on('message', (topic, payload) => {
			let tmp = payload.toString().split(',');
			data = {
				available: tmp[0],
			};
            for(let i = 1; i < tmp.length; i++) {
                data[`slot_${i}`] = tmp[i];
            }
            data[`created_at`] = new Date().toLocaleString();
    //console.log(data);
    io.sockets.emit('myData', data);
		});
	});
  
  
});
