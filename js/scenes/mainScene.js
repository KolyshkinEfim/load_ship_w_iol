export default class mainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");

    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeigth;
    this.player;
    this.boat;
  }
  preload() {
    this.load.image("ocean", "../../assets/oceanBackground.jpg");
    this.load.image("player", "../../assets/player/testBoat.png");
    this.load.spritesheet("boat", "../../assets/player/testBoat.png", {
      frameWidth: 100,
      frameHeigth: 800,
    });
  }

  create() {
    this.add.image(1000, 500, "ocean");
    this.add.image(950, 900, "player");
    this.boat = this.physics.add.sprite(100, 300, "boat");
  }

  update() {
    console.log("update");
  }
}
