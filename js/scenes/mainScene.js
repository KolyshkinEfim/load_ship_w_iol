class mainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");

    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeigth;
    this.player = undefined;
    this.cursors = undefined;
    this.bootle = undefined;
    this.score = undefined;
  }
  preload() {
    this.load.image("ocean", "../../assets/ocean.png");
    this.load.image("waves", "../../assets/waves.png");
    this.load.image("waves2", "../../assets/waves2.png");
    this.load.image("donekolba", "../../assets/items/OilKolba.png");

    this.load.image("player", "../../assets/player/_player.png");
  }

  create() {
    this.add.image(1000, 500, "ocean");
    this.add.image(1000, 500, "waves");

    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = this.physics.add.image(975, 800, "player");
    this.player.setCollideWorldBounds(true);

    this.createScore();

    this.kolba = this.physics.add.image(1100, 400, "donekolba");
    this.physics.add.overlap(
      this.player,
      this.kolba,
      this.oilCollecting,
      null,
      this
    );
  }

  createScore() {
    this.score = 0;

    let style = { font: "20px Arial", fill: "white" };

    this.scoreText = this.add.text(
      20,
      20,
      "Количество собранных колб: " + this.score,
      style
    );
  }

  oilCollecting() {
    this.kolba.x = Phaser.Math.Between(100, 1200);
    this.kolba.y = Phaser.Math.Between(100, 1000);

    this.score += 1;

    this.scoreText.setText("Количество собранных колб: " + this.score);

    // this.tweens.add({
    //   target: this.player,
    //   duration: 300,
    //   scaleX: 1.1,
    //   scaleY: 1.1,
    //   yoyo: true,
    // });
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
