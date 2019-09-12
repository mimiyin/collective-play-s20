// Open and connect input socket
let socket = io('/input');

// Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function mouseMoved(){
  // Send mouse position
  socket.emit('data', { x: mouseX, y: mouseY });

  // Draw ellipse @mouse position
  fill(0);
  ellipse(mouseX, mouseY, 10, 10);
}
