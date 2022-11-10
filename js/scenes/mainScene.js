export default class mainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");

    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeigth;
    this.player;
    this.boat;
    this.cursor;
    this.playerSpeed = 100;
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

    this.player = this.add.image("950", "900", "texture", "player");

    this.cursor = this.input.keyboard.createCursorKeys();

    this.fPlayer = player;
  }

  update() {
    this.fPlayer.x += 1;
    // if (this.cursor.left.isDown) {
    //   this.fPlayer.setVelocityX(-100);
    // } else if (this.cursor.rigth.isDown) {
    //   this.fPlayer.setVelocityY(100);
    // } else {
    //   this.fPlayer.setVelocityX(0);
    // }
  }
}
