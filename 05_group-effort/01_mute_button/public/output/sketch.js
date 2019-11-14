// Open and connect input socket
let socket = io('/output');

// Listen for confirmation of connection
socket.on('connect', function () {
  console.log("Connected");
});

// Sounds
let clock;

// Volume for clock
let clockVol = -5;
let CLOCK_SENSITIVITY = .425;
let CLOCK_VOL_SPEED = 0.005;

// Has audio started
let audio = false;

function preload() {
  hamstar = loadSound('hamstar.mp3');
  clock = loadSound('clock.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Listen for movement data
  socket.on('move', function (data) {
    console.log("MOVE", data);
    // If there's slight movement, set
    if (data > CLOCK_SENSITIVITY) {
      clockVol = -5;
      console.log("DAMN", data);
    }
    // Compare that to this:
    //if (data > 0.5) clockVol -= 0.5;

  });

  // Set up sounds
  clock.loop();
  clock.setVolume(0);

  // Peg frameRate to 30
  frameRate(30);
}

function draw() {
  background(255);

  // Draw clock volume
  let h = map(clockVol, -5, 5, 0, height);
  if (clockVol > 0) fill('green');
  else fill('red');
  noStroke();
  rect(0, height - h, width, h);
  fill('black');
  textSize(16);
  text("SENSITIVITY " + nfs(CLOCK_SENSITIVITY, 0, 2), m, height - h);
  text("SPEED " + nfs(CLOCK_VOL_SPEED, 0, 3), width-2*m, height - h);
  
  // Clock increases volume all the time if there are users
   if (audio && numUsers >= MIN_USERS) {
     clockVol += CLOCK_VOL_SPEED;
     clock.setVolume(constrain(clockVol, 0, 5));
   }
}

function keyPressed() {
  if(!audio) {
    getAudioContext().resume();
    // Remove instructions
    select('#key-press').remove();
    audio = true;
  }

  // Use arrow keys to adjust sensitivity
  if (keyCode == UP_ARROW) CLOCK_SENSITIVITY += 0.01;
  else if (keyCode == DOWN_ARROW) CLOCK_SENSITIVITY -= 0.01;
  else if (keyCode == RIGHT_ARROW) CLOCK_VOL_SPEED += 0.001;
  else if (keyCode == LEFT_ARROW) CLOCK_VOL_SPEED -= 0.001;

  // Constrain it
  CLOCK_SENSITIVITY = constrain(CLOCK_SENSITIVITY, 0.01, 1);
  CLOCK_VOL_SPEED = constrain(CLOCK_VOL_SPEED, 0, 1);
}
