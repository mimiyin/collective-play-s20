// Open and connect input socket
let socket = io('/output');

// Listen for confirmation of connection
socket.on('connect', function () {
  console.log("Connected");
});

// Keep track of partners
let users = {};
// Keep track of average position
let pAvgPos;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Listen for message
  socket.on('message', function (message) {
    let id = message.id;
    let data = message.data;

    // Update position of user in room
    // Scaled to output screen size
    users[id] = { x: width * data.x, y: height * data.y };
  });

  // Remove disconnected users
  socket.on('disconnected', function (id) {
    delete users[id];
  });
}

function draw() {

  // Calculate avgPos of users
  let avgPos = { x: 0, y: 0 };
  let counter = 0;
  // Array of users
  let users_arr = [];

  // Loop through users to calculate average position
  // and check distance between users
  for (let u in users) {
    let user = users[u];

    avgPos.x += user.x;
    avgPos.y += user.y;

    // Store user in array of users
    users_arr[counter] = users[u];

    // Keep counting
    counter++;
  }

  // Check distance between 1st 2 users
  if(users_arr.length > 1) {
    let d = dist(users_arr[0].x, users_arr[0].y, users_arr[1].x, users_arr[1].y);
    if(d > 50) background(255);
  }

  // Calculate average position
  avgPos.x /= users_arr.length;
  avgPos.y /= users_arr.length;

  // Only draw if there's a previous average position
  // And more than 1 person is drawing
  if (pAvgPos && users_arr.length > 1) {
    // Draw line of average positions
    stroke(0);
    line(pAvgPos.x, pAvgPos.y, avgPos.x, avgPos.y);
  }

  // Remember average position for next frame
  pAvgPos = avgPos;
}
