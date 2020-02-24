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

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
  noStroke();
  fill(0);

  // Calcaulate transparency of left-right
  // and up-down halves based on tilt of device
  // RotationXY gives you numbers from -180 to 180.
  let lr = floor(rotationY);
  let tb = floor(rotationX);
  // Ignore flipped over device
  lr = constrain(lr, -90, 90);
  tb = constrain(tb, -90, 90);

  // Map rotationYZ to XY location on the screen
  let x = map(lr, -90, 90, 0, width);
  let y = map(tb, -90, 90, 0, height);
  ellipse(x, y, 50, 50);

  // Send tilt angle
  socket.emit('tilt', {x: lr, y: tb});
}

// Calculate size of shake
// Send data
function deviceShaken() {
  let force = abs(accelerationX-pAccelerationX) + abs(accelerationY-pAccelerationY);
  socket.emit('shake', force);
}
