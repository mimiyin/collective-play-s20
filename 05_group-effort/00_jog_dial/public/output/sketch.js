// Open and connect input socket
let socket = io('/output');

// Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

// Keep track of users
let users = {};
// Sounds
let hamstar;

// Min number of users
let MIN_USERS = 1;

// Number of frames elapsed for song to play 2x
let MIN_INTERVAL = 5;
// Number of frames elapsed for song to play 0x
let MAX_INTERVAL = 60;

// Has audio started
let audio = false;

function preload() {
  hamstar = loadSound('hamstar.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Listen for shake data
  socket.on('shake', function(message) {
    let id = message.id;
    let interval = message.data;
    //console.log(interval);
    // Ignore super fast shakes - noisy data
    if (interval > MIN_INTERVAL) {
      let playSpeed = map(interval, MIN_INTERVAL, MAX_INTERVAL, 2, 0);
      playSpeed = constrain(playSpeed, 0.001, 2);
      // Store playspeed
      users[id] = playSpeed;
    }
  });

  // Listen for disconnection to remove user
  socket.on('disconnected', function(id) {
    delete users[id];
  });

  // Set up sounds
  hamstar.rate(0);
  hamstar.loop();

  // Peg frameRate to 30
  frameRate(30);
}

function draw() {
  background(255);

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////// GROUP EFFORT ////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  // Find the mean average playspeed
  let mean = 0;
  // Count number of users
  let numUsers = 0;
  for (let u in users) {
    mean += users[u];
    numUsers++;
  }
  mean /= numUsers;

  // Playback speed of hamstar dance
  // 1 second interval = no playback
  // 0 second interval = 2x playback
  if (numUsers > 0) {
    // Set playback speed of hamstar dance - don't let it actually fall to 0
    if (frameCount % 10 == 0) hamstar.rate(max(0.001, playSpeed));
  }

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  //////////////// Draw the users and averages ///////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  let userNum = 0;
  let m = 100;
  let colW = (width - (2 * m)) / MIN_USERS;
  let scl = height / 150;
  noStroke();
  for (let u in users) {
    let interval = users[u] * scl;
    ellipse((userNum * colW) + m, interval, 20, 20);
    userNum++;
  }

  // Visualize mean
  noStroke();
  fill(0);
  text("MEAN", m, mean * scl);

  stroke(0);
  line(0, mean * scl, width, mean * scl);
}

function keyPressed() {
  if (!audio) {
    getAudioContext().resume();
    // Remove instructions
    select('#key-press').remove();
    audio = true;
  }
}
