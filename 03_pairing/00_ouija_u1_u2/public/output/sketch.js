// Open and connect input socket
let socket = io('/output');

// Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

// Keep track of partners
let users = {};
// Keep track of average position
let pAvgPos;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Listen for message
  socket.on('message', function(message) {
    let id = message.id;
    let data = message.data;

    // Update position of user in room
    // Scaled to output screen size
    users[id] = {
      x: width * data.x,
      y: height * data.y
    };
  });

  // Remove disconnected users
  socket.on('disconnected', function(id) {
    delete users[id];
  });
}

function draw() {

  // Calculate avgPos of 2 users
  if (users[1] && users[2]) {
    let avgPos = {
      x: (users[1].x + users[2].x) / 2,
      y: (users[1].y + users[2].y) / 2
    };

    // Calculate the distance between 2 users
    let d = dist(users[1].x, users[1].y, users[2].x, users[2].y);
    if (d > 250) background(255);

    // If there's a previous average position, draw a line to it
    if (pAvgPos) {
      // Draw line of average positions
      stroke(0);
      line(pAvgPos.x, pAvgPos.y, avgPos.x, avgPos.y);
    }
    // Store current average position as previous average position for next frame
    pAvgPos = avgPos;
  }
}
