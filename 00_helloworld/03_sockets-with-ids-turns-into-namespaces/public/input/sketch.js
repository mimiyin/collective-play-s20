// Open and connect socket
let socket = io('/input');

// Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  fill('black');
  ellipse(mouseX, mouseY, 10, 10);
}

// Send mouse info
function mouseMoved(){
  // Send mouse position
  socket.emit('data', {x: mouseX, y: mouseY});
}
