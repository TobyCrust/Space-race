var debnum = 60;
let leftShip;
let rightShip;
let allDebris = [];

const NUM_DEBRIS = debnum;

let leftScore;
let rightScore;

let spaceshipImage;

function setup() {
  createCanvas(400, 400);

  spaceshipImage = loadImage('rocket.png');

  leftShip = new Ship(width * 0.33, spaceshipImage);
  rightShip = new Ship(width * 0.66, spaceshipImage);

  for (let i = 0; i < NUM_DEBRIS; i++) {
  	allDebris.push(new Debris());
  }


  leftScore = new Score(width * 0.33 - 110);
  rightScore = new Score(width * 0.66 + 110);



}

function draw() {
  background(0);
  fill(250,0,0);


  leftShip.update();
  rightShip.update();

  leftShip.display();
  rightShip.display();

  updateDebrisAndCheckCollisions();



  leftScore.display(leftShip.score);
  rightScore.display(rightShip.score);
  stroke(255);
  line(height/2, 0, width/2,height*2,);
  stroke(0);
}


function updateDebrisAndCheckCollisions() {
  for (let i = 0; i < allDebris.length; i++) {
    allDebris[i].update();
  	allDebris[i].display();

    if (allDebris[i].hasHitShip(leftShip)) {
    	leftShip.respawn();
    } else if (allDebris[i].hasHitShip(rightShip)) {
    	rightShip.respawn();
    }
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    rightShip.isUp = true;
    rightShip.isDown = false;
  } else if (keyCode == DOWN_ARROW) {
  	rightShip.isDown = true;
    rightShip.isUp = false;
  }


  if (keyCode == 87) {
  	// keycode is 'w'
    leftShip.isUp = true;
    leftShip.isDown = false;
  } else if (keyCode == 83) {
  	// keycode is 's'
    leftShip.isDown = true;
    leftShip.isUp = false;
  }
}
function keyReleased() {
  if (keyCode == UP_ARROW) {
    rightShip.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
    rightShip.isDown = false;
  }

  if (keyCode == 87) {
    leftShip.isUp = false;
  } else if (keyCode == 83) {
    leftShip.isDown = false;
  }
}
