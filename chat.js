const express = require('express');
const app = express();
//Server class
const socketio = require('socket.io');


app.use(express.static(__dirname + '/public'))

//Express server listening on port
const expressServer = app.listen(9001);

//socketio listening to express server
// can invoke server methods
const io = socketio(expressServer);


//socketio emits event to client, receives event from client
io.on('connection', (socket) => {
  socket.emit('messageFromServer', { data: "Welcome to the socketio server!" })
  socket.on('messageToServer', (dataFromClient) => console.log(dataFromClient))

  socket.on('newMessageToServer', (msg) => {
    io.emit('messageToClient', { text: msg.text })
  })
})