class Log extends BaseClass {
  //construction of log using matter.js
  constructor(xInput, yInput, heightInput, angleInput) {
    super(xInput, yInput, 20, heightInput, angleInput);

    this.image = loadImage("images/wood2.png");
    Matter.Body.setAngle(this.body, angleInput);

    this.visibility = 255;
  }

  // Make the logs invisible after the user wins the game
  goInvisible(){
   // if () gameState
  }
}
