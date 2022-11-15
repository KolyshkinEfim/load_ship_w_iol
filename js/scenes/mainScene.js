export default class mainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");

    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeigth;
    this.playerSpeed = 100;

    this.player = undefined;
    this.cursors = undefined;
  }
  preload() {
    this.load.image("ocean", "../../assets/ocean.png");
    this.load.image("waves", "../../assets/waves.png");
    this.load.image("waves2", "../../assets/waves2.png");
    this.load.image("bottle", "../../assets/items/oilBottle.png");

    this.load.image("player", "../../assets/player/_player.png");
  }

  create() {
    this.add.image(1000, 500, "ocean");
    this.add.image(1000, 500, "waves");

    this.add.image(1000, 200, "bottle");
    this.add.image(800, 300, "bottle");
    this.add.image(600, 500, "bottle");
    this.add.image(300, 700, "bottle");

    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = this.physics.add.image(100, 100, "player");
    this.player.setCollideWorldBounds(true);
  }

  update() {
    this.player.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(300);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-300);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(300);
    }
  }
}
