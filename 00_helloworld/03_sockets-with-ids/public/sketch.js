// Open and connect socket
let socket = io();
// Create user directory
let users = {};

// Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Receive message from server
  socket.on('message', function(message){
    // Get id and data from message
    let id = message.id;
    let data = message.data;

    // Update user's data
    if(id in users) {
      users[id].ppos = users[id].pos;
      users[id].pos = data;
    }
    // Or create a new user
    else {
      users[id] = {
        pos: data,
        ppos : data
      }
    }
  });

  // Remove disconnected users
  socket.on('disconnected', function(id){
    delete users[id];
  });
}

function draw() {

  // Draw all the user lines
  for (let u in users) {
    // Get user's data
    let user = users[u];
    // Get this user's positions
    let ppos = user.ppos;
    let pos = user.pos;
    // Draw the latest line segment
    line(ppos.x, ppos.y, pos.x, pos.y);
  }

  // Send mouse info
  socket.emit('data', {x: mouseX, y: mouseY});
}
