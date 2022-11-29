class mainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");

    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeigth;
    this.player = undefined;
    this.cursors = undefined;
    this.isSlowed = false;
  }
  preload() {
    this.load.image("ocean", "../../assets/ocean.png");
    this.load.image("waves", "../../assets/waves.png");
    this.load.image("waves2", "../../assets/waves2.png");
    this.load.image("smallGlaciers", "../../assets/smallGlaciers.png");
    this.load.image("smallGlaciers2", "../../assets/smallGlaciers2.png");
    this.load.image("player", "../../assets/player/player.png");
  }

  create() {
    this.background = this.add.sprite(0, 0, "ocean");
    this.background.setOrigin(0, 0);
    this.background.setScale(1);
    this.background.alpha = 0.8;

    this.waves = this.add.image(0, 0, "waves");
    this.waves2 = this.add.image(100, 200, "waves2");

    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.image(100, 475, "player");
    this.player.setCollideWorldBounds(true);
    this.player.setDamping(true);
    this.player.setDrag(0.99);

    this.upperGlaciers = this.physics.add.image(970, 70, "smallGlaciers");
    this.downGlaciers = this.physics.add.image(970, 940, "smallGlaciers2");

    this.testText = this.add.text(10, 10, "", {
      font: "16px Courier",
      fill: "#00ff00",
    });

    this.physics.add.overlap(
      this.player,
      this.downGlaciers,
      this.movementSlowed,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.upperGlaciers,
      this.movementSlowed,
      null,
      this
    );
  }

  movementSlowed() {
    this.isSlowed = true;
    console.log("SLOWED");
  }

  // movementNormal() {
  //   this.isSlowed = false;
  //   console.log("NOT SLOWED");
  // }

  movementReset() {
    this.player.setVelocityY(0);
  }

  // checkSlowedMovement() {
  //   if (this.isSlowed) {
  //     this.player.setVelocityX(10);
  //   } else {
  //     this.player.setVelocityX(20);
  //   }
  // }

  movement() {
    // set the initial value of the player movement;
    // this.checkSlowedMovement();
    this.player.setVelocityX(20);
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-100); // default valuer is a -20 & 20
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(100);
    } else {
      this.movementReset();
    }
  }

  testSpeedChecker() {
    this.testText.setText("Speed: " + this.player.body.speed); //just for the test
  }

  update() {
    this.movement();
    this.testSpeedChecker(); //just for the test
  }
}

// this.kolba = this.physics.add.image(1100, 400, "bottle");
// this.physics.add.overlap(
//   this.player,
//   this.kolba,
//   this.oilCollecting,
//   null,
//   this
// );
