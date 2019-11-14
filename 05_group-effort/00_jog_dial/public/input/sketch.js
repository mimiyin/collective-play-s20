// Asking for permision for motion sensors on iOS 13+ devices
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function () {
    DeviceOrientationEvent.requestPermission();
    DeviceMotionEvent.requestPermission();
  })
}

// Open and connect input socket
let socket = io('/input');

// Keep track of when last shaken
let lastShaken = 0;
let interval = 30;
// Number of shakes
let num = 0;

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

  // Print number of shakes to the screen
  textSize(64);
  text(num, width / 2, height / 2);

  // Check once a second if user has slowed down
  if (frameCount % 30 == 0) {
    let newInterval = frameCount - lastShaken;
    if (newInterval > interval) {
      interval = newInterval;
      socket.emit('shake', interval);
    }
  }
}

// Calculate size of shake
// Send data
function deviceShaken() {
  // Ignore super fast shakes (noisy data)
  if (frameCount - lastShaken < 5) return;
  // Count number of shakes
  num++;
  // Draw a red background for every shake
  background('red');
  // Calculate the number of frames that have elapsed since last shake
  interval = frameCount - lastShaken;
  // Send time interval to server
  socket.emit('shake', interval);
  // Update last shake framecount with current framecount
  lastShaken = frameCount;
}
