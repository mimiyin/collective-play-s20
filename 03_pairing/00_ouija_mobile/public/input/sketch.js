// Asking for permision for motion sensors on iOS 13+ devices
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function () {
    DeviceOrientationEvent.requestPermission();
    DeviceMotionEvent.requestPermission();
  })
}

// Open and connect input socket
let socket = io('/input');

// Listen for confirmation of connection
socket.on('connect', function() {
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

function draw(){
  background(255);
  noStroke();
  fill(0);

  for (let u in users) {
    let user = users[u];
    // If this user is me, make it red
    if (u == socket.id) fill('red');
    // Otherwise, blue
    else fill('blue');
    ellipse(user.x, user.y, 50, 50);
  }

  // Map rotation to x,y location on the screen
  let x = map(rotationY, -90, 90, 0, width);
  let y = map(rotationX, -90, 90, 0, height);

  // Send tilt angles as normalized x,y coordinates
  socket.emit('data', {x: x / width, y: y / height});
}
