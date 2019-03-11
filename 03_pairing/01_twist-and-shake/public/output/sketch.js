// Open and connect input socket
let socket = io('/output');

// Listen for confirmation of connection
socket.on('connect', function () {
  console.log("Connected");
});

// Keep track of users
let tilt, shake;

// Keep track of ball
let x, y;
let xspeed = 0;
let yspeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Listen for tilt data
  socket.on('tilt', function (data) {
    tilt = data;
  });

  // Listen for shake data
  socket.on('shake', function (data) {
    shake = data;
  });

  // Start in the middle
  x = width/2;
  y = height/2;

  // Draw the background
  background(0);
  noStroke();
}

function draw() {
  fill(255, 1);
  // Calculate velocity based on tilt and shake
  if(tilt && shake) {
    xspeed = tilt.x*shake*0.1;
    yspeed = tilt.y*shake*0.1;
  }

  // Ball
  x+=xspeed;
  y+=yspeed;

  // Ball
  ellipse(x, y, 50, 50);

  // Reset tilt and shake for next frame
  tilt = null;
  shake = 3; //null;
}
