export default class mainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");

    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeigth;
    this.player;
    this.cursor;
    this.playerSpeed = 100;
  }
  preload() {
    this.load.image("ocean", "../../assets/oceanBackground.jpg");

    this.load.spritesheet("player", "../../assets/player/player.png", {
      frameWidth: 200,
      frameHeigth: 300,
    });
  }

  create() {
    this.add.image(1000, 500, "ocean");

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
