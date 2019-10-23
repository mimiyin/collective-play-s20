// Create server
let port = process.env.PORT || 8000;
let express = require('express');
let app = express();
let server = require('http').createServer(app).listen(port, function () {
  console.log('Server listening at port: ', port);
});

// Tell server where to look for files
app.use(express.static('public'));

// Create socket connection
let io = require('socket.io').listen(server);

// Keep track of queue
let queue = [];
let q = -1;
let current;

// Listen for individual clients to connect
io.sockets.on('connection',
  // Callback function on connection
  // Comes back with a socket object
  function (socket) {

    console.log("We have a new client: " + socket.id);

    // Add socket to queue
    queue.push(socket);

    // Kick off queue as soon as there's 1 person in line
    if (q < 0 && queue.length > 1) {
      next(true);
    }
    // Listen for add messages
    socket.on('add', function (data) {
      // Data comes in as whatever was sent, including objects
      //console.log("Received: 'add' " + data);

      // Send it to all clients, including this one
      io.sockets.emit('add', data);
    });

    // Listen for remove messages
    socket.on('remove', function () {
      // Data comes in as whatever was sent, including objects
      //console.log("Received: 'remove');

      // Send it to all clients, including this one
      io.sockets.emit('remove');
    });

    // Ready for next
    socket.on('next', function () {
      next(true);
    });

    // Listen for this client to disconnect
    // Tell everyone client has disconnected
    socket.on('disconnect', function() {
      // Tell everyone someone
      io.sockets.emit('disconnected', socket.id);

      // Remove socket from queue
      for(let s = 0; s < queue.length; s++) {
        console.log(queue[s].id, socket.id);
        if(queue[s].id == socket.id) {
          console.log("Remove from queue: ", socket.id);
          // Remove from queue
          queue.splice(s, 1);
          // If current client disconnected, set new current
          if (socket === current) next(false);
        }
      }
    });
  });

// Get next client
function next(advance) {
  // Move to next person in line
  if(advance) q++;
  // When we reach the end, wrap around to the beginning
  if(q >= queue.length) q = 0;
  console.log("NEXT UP: ", q, queue.length);

  // Set current socket
  current = queue[q];
  current.emit('go');
}
