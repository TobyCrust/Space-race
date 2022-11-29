class Ship {

  constructor(x, spaceshipImage) {
    this.x = x;
    this.score = 0;
    this.respawn();
    this.r = 20;
    this.spaceshipImage = spaceshipImage;
  }

  respawn() {
    this.y = height - 25;
    this.isUp = false
    this.isDown = false;
  }

  update() {
    if (this.isUp && this.y > 0) {
      this.up();
    } else if (this.isDown && this.y < height - 25) {
      this.down();
    }

    if (this.hasPlayerScoredAPoint()) {
      this.score ++;
      this.respawn();
    }
  }

  display() {
    imageMode(CENTER);
    image(this.spaceshipImage, this.x, this.y, this.r * 2, this.r * 2);
  }


  up() {
    this.y--;
  }

  down() {
   this.y++;
  }

  hasPlayerScoredAPoint() {
    if (this.y <= 0) {
      return true;
    }
    return false;
  }
}
