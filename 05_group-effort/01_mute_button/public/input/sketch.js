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
  setShakeThreshold(30);
  background(0);
  frameRate(30);
  textAlign(CENTER);
}

function draw() {
  background(0);

  let movement = dist(accelerationX, accelerationY, accelerationZ, pAccelerationX, pAccelerationY, pAccelerationZ);
  // Test with mouse
  //let movement = dist(pmouseX, pmouseY, mouseX, mouseY);
  fill(255, 10);
  ellipse(width / 2, height / 2, movement, movement);
  socket.emit('move', movement);

  // Print movement number to screen
  fill(255);
  textSize(32);
  text(movement, width / 2, (height / 2) - 100);
}
