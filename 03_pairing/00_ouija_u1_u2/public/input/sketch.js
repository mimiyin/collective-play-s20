// Open and connect input socket
let socket = io('/input');

// Figure out your user based on url parameters
var urlParams = new URLSearchParams(window.location.search);
let u = urlParams.get('u');

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
  for (let uindex in users) {
    let user = users[uindex];
    // If this user is me, make it red
    if (uindex == u) fill('red');

    // Otherwise, blue
    else fill('blue');

    // Draw the location
    ellipse(user.x, user.y, 50, 50);
  }

  // Send proportional, normalized mouse data
  let x = mouseX / width;
  let y = mouseY / height;

  // Emit the data
  socket.emit('message', {
    id : u,
    data : {
      x: x,
      y: y
    }
  });
}
