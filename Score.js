class Score {

  constructor(x) {
    this.x = x;
    this.y = height - 20;
  }


  display(score) {
    fill(255);
    textAlign(CENTER);
    textSize(45);
    text(score, this.x, this.y);
  }

}
