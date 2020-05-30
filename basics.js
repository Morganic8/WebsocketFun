//Need http because Express is not installed
const http = require('http');

//we need socketio 
const socketio = require('socket.io');

//we make an http servr with node!
const server = http.createServer((req, res) => {
  res.end("I am trying socket io connected")
});

const io = socketio(server);

io.on('connection', (socket, req) => {
  socket.emit('welcome', 'Welcome to the socket.io server!')
  socket.on('message', (msg) => {
    console.log(msg)
  })
})

server.listen(8000);