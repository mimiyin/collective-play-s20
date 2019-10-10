// Grab user number from the url
let u = window.location.search;

// Open and connect input socket
let socket = io('/input');

// Listen for confirmation of connection
socket.on('connect', function () {
  console.log("Connected");
});


// Keep track of partners
let users = {};

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Listen for message from partners
  socket.on('message', function (message) {
    let id = message.id;
    let data = message.data;
    users[id] = { x: width * data.x, y: height * data.y };
  });

  // Remove disconnected users
  socket.on('disconnected', function (id) {
    delete users[id];
  });
}

function draw() {
  background(255);
  // Draw a dot for each user
  noStroke();

  // Draw mouse position
  fill('red');
  ellipse(mouseX, mouseY, 50, 50);

  // Send proportional, normalized mouse data
  let x = mouseX / width;
  let y = mouseY / height;

  // Flip data for user 1
  if(u == '?u=1') {
    x = 1-x;
    y = 1-y;
  }

  // Emit the data
  socket.emit('data', {
    x: x,
    y: y
  });
}
