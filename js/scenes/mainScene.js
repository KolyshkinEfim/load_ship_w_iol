class mainScene extends Phaser.Scene {
  constructor() {
    super({ key: "mainScene" });

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.player = undefined;
    this.cursors = undefined;
    this.isSlowed = false;

    // test cases shoud to change the logic and make the code clear
    this.tracker = 0;
    this.missionEvent = false;
    this.cameraScoped = false;
    //for the moving the ship normally
    this.onPoint = false;
  }

  //#region preload
  preload() {
    this.load.image("ocean", "../../assets/ocean.png");
    this.load.image("waves", "../../assets/waves.png");
    this.load.image("waves2", "../../assets/waves2.png");
    this.load.image("smallGlaciers", "../../assets/smallGlaciers.png");
    this.load.image("smallGlaciers2", "../../assets/smallGlaciers2.png");
    this.load.image("player", "../../assets/player/player.png");

    this.load.image("iceberg1", "../../assets/objects/iceberg1.png");
    this.load.image("iceberg2", "../../assets/objects/iceberg2.png");
    this.load.image("downIceberg1", "../../assets/objects/DownIceberg1.png");
    this.load.image("downIceberg2", "../../assets/objects/DownIceberg2.png");
    this.load.image("upIceberg1", "../../assets/objects/UpIceberg1.png");
    this.load.image("upIceberg2", "../../assets/objects/UpIceberg2.png");
    this.load.image("upIceberg3", "../../assets/objects/UpIceberg3.png");
    this.load.image(
      "rectangle",
      "../../assets/objects/sceneChangerRectangle.png"
    );

    this.load.image("enemyIceberg", "../../assets/objects/iceberg1.png");
    this.load.image("enemyIceberg2", "../../assets/objects/iceberg2.png");

    this.load.image("oilStation", "../../assets/objects/oilStation.png");
  }
  //#endregion

  //#region create
  create() {
    this.cameras.main.setBounds(0, 0, 1918, 1009);
    this.cameras.main.setZoom(1);
    this.cameras.main.centerOn(0, 0);

    this.background = this.add.sprite(0, 0, "ocean");
    this.background.setOrigin(0, 0);
    this.background.setScale(1);
    this.background.alpha = 0.8;

    this.waves = this.add.image(0, 0, "waves");
    this.waves2 = this.add.image(100, 200, "waves2");

    this.oilStation = this.add.image(
      this.screenWidth - 30,
      this.screenHeight / 2,
      "oilStation"
    );
    this.oilStation.setScale(0.2);
    this.oilStation.alpha = 1;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.image(100, this.screenHeight / 2, "player");
    this.player.setCollideWorldBounds(true);
    this.player.setDamping(true);
    this.player.setDrag(0.99);
    this.player.setScale(0.1);

    this.upperGlaciers = this.physics.add.image(970, 70, "smallGlaciers");
    this.downGlaciers = this.physics.add.image(970, 940, "smallGlaciers2");

    this.missionRectangle = this.physics.add.image(
      this.screenWidth - 250,
      this.screenHeight / 2,
      "rectangle"
    );
    this.missionRectangle.setScale(0.4);
    this.missionRectangle.setOrigin(0.5, 0.5);

    this.upIceberg = this.physics.add.image(180, 60, "upIceberg1");
    this.upIceberg.setScale(0.25);
    this.upIceberg2 = this.physics.add.image(900, 57, "upIceberg2");
    this.upIceberg2.setScale(0.2);
    this.upIceberg3 = this.physics.add.image(1600, 50, "upIceberg3");
    this.upIceberg3.setScale(0.2);

    this.downIceberg2 = this.physics.add.image(400, 950, "downIceberg2");
    this.downIceberg2.setScale(0.25);
    this.downIceberg = this.physics.add.image(1300, 945, "downIceberg1");
    this.downIceberg.setScale(0.35);

    this.enemyIceberg = this.physics.add.image(300, 500, "enemyIceberg");
    this.enemyIceberg.setScale(0.4);
    this.enemyIceberg2 = this.physics.add.image(500, 300, "enemyIceberg2");
    this.enemyIceberg2.setScale(0.3);
    this.enemyIceberg3 = this.physics.add.image(600, 800, "enemyIceberg");
    this.enemyIceberg3.setScale(0.7);
    this.enemyIceberg4 = this.physics.add.image(900, 750, "enemyIceberg2");
    this.enemyIceberg4.setScale(1);
    this.enemyIceberg5 = this.physics.add.image(900, 450, "enemyIceberg2");
    this.enemyIceberg5.setScale(0.9);
    this.enemyIceberg6 = this.physics.add.image(650, 400, "enemyIceberg");
    this.enemyIceberg6.setScale(0.6);
    this.enemyIceberg7 = this.physics.add.image(800, 200, "enemyIceberg2");
    this.enemyIceberg7.setScale(0.5);
    this.enemyIceberg8 = this.physics.add.image(1500, 600, "enemyIceberg");
    this.enemyIceberg8.setScale(0.3);
    this.enemyIceberg9 = this.physics.add.image(1350, 800, "enemyIceberg");
    this.enemyIceberg9.setScale(0.6);
    this.enemyIceberg10 = this.physics.add.image(1400, 400, "enemyIceberg");
    this.enemyIceberg10.setScale(1);

    this.time.addEvent({
      delay: 1000,
      calback: function () {},
    });

    this.testText = this.add.text(10, 10, "", {
      font: "16px Courier",
      fill: "#00ff00",
    });

    this.posText = this.add.text(10, 200, "", {
      font: "32px Courier",
      fill: "#00ff00",
    });

    this.physics.add.overlap(
      this.player,
      [this.downGlaciers, this.upperGlaciers],
      this.movementSlowed,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      [
        this.enemyIceberg,
        this.enemyIceberg2,
        this.enemyIceberg3,
        this.enemyIceberg4,
        this.enemyIceberg5,
        this.enemyIceberg6,
        this.enemyIceberg7,
        this.enemyIceberg8,
        this.enemyIceberg9,
        this.enemyIceberg10,
      ],
      this.shipCrush,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      [
        this.upIceberg,
        this.upIceberg2,
        this.upIceberg3,
        this.downIceberg,
        this.downIceberg2,
      ],
      this.shipCrush,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.missionRectangle,
      this.inMissionStart,
      null,
      this
    );
  }
  //#endregion

  //#region funttions
  movementSlowed() {
    this.isSlowed = true;
    console.log("SLOWED");
  }

  inMissionStart() {
    console.log("im inside");
    if (this.missionEvent == false) {
      this.time.addEvent({
        delay: 1000,
        callback: function () {
          if (this.tracker < 5) {
            ++this.tracker;
          }
          if (this.tracker === 5) {
            // while()
            this.player.x = this.missionRectangle.x;
            this.player.y = this.missionRectangle.y;
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            if (!this.cameraScoped) {
              this.scopeCamera();
              this.cameraScoped = true;
              this.hookSceneChange();
            }
          }
        },
        callbackScope: this,
        loop: true,
      });
      this.missionEvent = true;
    }
  }

  hookSceneChange() {
    setTimeout(() => this.scene.start("hookScene"), 2000);
  }

  scopeCamera() {
    const cam = this.cameras.main;
    cam.alpha = 1;
    cam.pan(this.player.x, this.player.y, 1000);
    cam.zoomTo(2, 1000);
  }

  shipCrush() {
    this.scene.start("resultScene");
  }

  movementReset() {
    this.player.setVelocityY(0);
  }

  movement() {
    if (!this.missionEvent) {
      this.player.setVelocityX(20);
      if (this.cursors.up.isDown) {
        this.player.setVelocityY(-20); // default valuer is a -20 & 20
      } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(20);
      } else if (this.cursors.right.isDown) {
        this.player.x = this.missionRectangle.x - 30;
        this.player.y = this.missionRectangle.y;
      } else {
        this.movementReset();
      }
    }
    this.fail();
  }

  testSpeedChecker() {
    this.testText.setText("Speed: " + this.player.body.speed); //just for the test
  }

  checkPlayerPos() {
    this.posText.setText(
      "Pos x : \n" +
        this.player.x +
        "\n Pos y: \n" +
        this.player.y +
        "\n XMAX = " +
        this.screenWidth +
        "\n YMAX = " +
        this.screenHeight +
        "\n RectangleX = " +
        this.missionRectangle.x +
        "\nRectangleY = " +
        this.missionRectangle.y +
        "\ntracker value = " +
        this.tracker
    );
  }

  fail() {
    if (this.player.x >= this.screenWidth - 80) {
      this.scene.start("resultScene");
    }
    if (this.player.y === 40 || this.player.y >= this.screenHeight - 40) {
      this.scene.start("resultScene");
    }
  }
  //#endregion

  //#region update
  update() {
    this.movement();
    this.testSpeedChecker(); //just for the test
    this.checkPlayerPos(); // position of player
  }
  //#endregion update
}

// this.icebergs = this.add.group(); //functional for the random spawner
// console.log(this.icebergs);

// this.time.addEvent({
//   delay: 1000,
//   callback: function () {
//     this.iceberg = null;
//     if (Phaser.Math.Between(0, 10) <= 5) {
//       this.iceberg = new Iceberg(
//         this,
//         Phaser.Math.Between(150, 1700),
//         Phaser.Math.Between(180, 830)
//       );
//       this.iceberg.setScale(0.3);
//     }

//     if (this.iceberg != null) {
//       this.iceberg.setScale(Phaser.Math.Between(1, 5) * 0.1);
//       this.icebergs.add(this.iceberg);
//     }
//   },
//   callbackScope: this,
//   loop: true,
// });

// this.physics.add.overlap(
//   this.player,
//   this.icebergs,
//   this.shipCrush,
//   null,
//   this
// );

//#region testcases
// movementNormal() {
//   this.isSlowed = false;
//   console.log("NOT SLOWED");
// }

// checkSlowedMovement() {
//   if (this.isSlowed) {
//     this.player.setVelocityX(10);
//   } else {
//     this.player.setVelocityX(20);
//   }
// }

// set the initial value of the player movement;
// this.checkSlowedMovement();

// this.kolba = this.physics.add.image(1100, 400, "bottle");
// this.physics.add.overlap(
//   this.player,
//   this.kolba,
//   this.oilCollecting,
//   null,
//   this
// );
//#endregion
