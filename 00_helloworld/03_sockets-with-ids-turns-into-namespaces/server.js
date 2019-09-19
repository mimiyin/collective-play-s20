// Create server
let port = process.env.PORT || 8000;
let express = require('express');
let app = express();
let server = require('http').createServer(app).listen(port, function() {
  console.log('Server listening at port: ', port);
});

// Tell server where to look for files
app.use(express.static('public'));


// Create socket connection
let io = require('socket.io').listen(server);
let outputs = io.of('/output');
let inputs = io.of('/input');

outputs.on('connection', function(socket) {
  console.log('Hi output socket: ', socket.id);

  socket.on('disconnect', function() {
    console.log('Bye output socket: ', socket.id);
  })
})

// Input sockets listen for connection
inputs.on('connection', function(socket) {
  console.log('Hi input socket: ', socket.id);

  // Input socket listen for new data
  socket.on('data', function(data) {
    // Wrap data up in message
    let message = {
      id: socket.id,
      data: data
    }
    // Send to all output sockets
    outputs.emit('message', message);
  });

  // Input socket listen for disconnection
  socket.on('disconnect', function() {
    console.log('Bye input socket: ', socket.id);
    // Send to all output sockets
    outputs.emit('disconnect', socket.id);
  })


});
