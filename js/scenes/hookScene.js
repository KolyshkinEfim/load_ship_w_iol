class hookScene extends Phaser.Scene {
  constructor() {
    super({ key: "hookScene" });
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.oil = 0;
    this.playerSide = undefined;
    this.cursors = undefined;
    this.spaceState = false;
  }

  preload() {}

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.backgrounOcean = this.add.image(500, 500, "oceanSide");

    this.backgroundSky = this.add.image(0, 0, "sky");

    this.oilScore = this.add.image(this.screenWidth - 70, 40, "oilScore");
    this.scoreText = this.add.text(this.screenWidth - 75, 25, this.oil, {
      font: "25px Bold Courier",
      fill: "#0F6894",
    });

    this.oilScore.setScale(0.5);

    this.waves3 = this.add.image(
      this.screenWidth / 2,
      this.screenHeight - 350,
      "waves3"
    );
    this.waves3.alpha = 0.7;
    this.waves3.setScale(0.5);

    this.iceShards1 = this.add.image(
      this.screenWidth / 2,
      this.screenHeight / 2,
      "iceShards1"
    );
    this.iceShards1.setScale(0.5);

    this.iceShards2 = this.add.image(
      this.screenWidth / 2 - 100,
      this.screenHeight / 2 + 200,
      "iceShards1"
    );
    this.iceShards2.setScale(0.6);

    this.iceShards3 = this.add.image(
      this.screenWidth / 2 + 150,
      this.screenHeight / 2 + 150,
      "iceShards1"
    );
    this.iceShards3.setScale(0.6);

    this.iceShards4 = this.add.image(
      this.screenWidth / 2 - 150,
      this.screenHeight / 2 + 100,
      "iceShards1"
    );
    this.iceShards4.setScale(0.6);

    this.iceShards5 = this.add.image(
      this.screenWidth / 2 - 800,
      this.screenHeight / 2 + 100,
      "iceShards1"
    );
    this.iceShards5.setScale(0.4);

    this.iceShards6 = this.add.image(
      this.screenWidth / 2 - 810,
      this.screenHeight / 2,
      "iceShards1"
    );
    this.iceShards6.setScale(0.8);

    this.iceShards7 = this.add.image(
      this.screenWidth / 2 + 500,
      this.screenHeight / 2,
      "iceShards1"
    );
    this.iceShards7.setScale(0.6);

    this.iceShards8 = this.add.image(
      this.screenWidth / 2 - 640,
      this.screenHeight / 2,
      "iceShards1"
    );
    this.iceShards8.setScale(0.4);

    this.iceShards9 = this.add.image(
      this.screenWidth / 2 - 500,
      this.screenHeight / 2 + 100,
      "iceShards1"
    );
    this.iceShards9.setScale(0.6);
    this.iceShards10 = this.add.image(
      this.screenWidth / 2 - 400,
      this.screenHeight / 2 + 200,
      "iceShards1"
    );
    this.iceShards10.setScale(0.6);
    this.iceShards11 = this.add.image(
      this.screenWidth / 2 - 640,
      this.screenHeight / 2,
      "iceShards1"
    );
    this.iceShards11.setScale(0.4);
    this.iceShards12 = this.add.image(
      this.screenWidth / 2 - 640,
      this.screenHeight / 2,
      "iceShards1"
    );
    this.iceShards12.setScale(0.4);
    this.iceShards13 = this.add.image(
      this.screenWidth / 2 + 640,
      this.screenHeight / 2 - 100,
      "iceShards1"
    );
    this.iceShards13.setScale(1);
    this.iceShards14 = this.add.image(
      this.screenWidth / 2 + 640,
      this.screenHeight / 2 + 200,
      "iceShards1"
    );
    this.iceShards14.setScale(0.8);
    this.iceShards15 = this.add.image(
      this.screenWidth / 2 + 540,
      this.screenHeight / 2 + 150,
      "iceShards1"
    );
    this.iceShards15.setScale(0.8);
    this.iceShards16 = this.add.image(
      this.screenWidth / 2 + 540,
      this.screenHeight / 2 + 300,
      "iceShards1"
    );
    this.iceShards16.setScale(0.8);

    this.iceShards17 = this.add.image(
      this.screenWidth / 2 + 300,
      this.screenHeight / 2 + 300,
      "iceShards1"
    );
    this.iceShards17.setScale(0.6);

    this.iceShards18 = this.add.image(
      this.screenWidth / 2 - 300,
      this.screenHeight / 2 + 370,
      "iceShards1"
    );
    this.iceShards18.setScale(0.8);

    this.iceShards19 = this.add.image(
      this.screenWidth / 2,
      this.screenHeight / 2 + 300,
      "iceShards1"
    );
    this.iceShards19.setScale(0.6);

    this.iceShards20 = this.add.image(
      this.screenWidth / 2 - 600,
      this.screenHeight / 2 + 300,
      "iceShards1"
    );
    this.iceShards20.setScale(1);

    this.ice1 = this.add.image(
      this.screenWidth / 2 + 200,
      this.screenHeight / 2 + 450,
      "ice1"
    );
    this.ice1.setScale(0.7);

    this.ice2 = this.add.image(
      this.screenWidth / 2 - 200,
      this.screenHeight / 2,
      "ice1"
    );
    this.ice2.setScale(0.4);

    this.ice3 = this.add.image(
      this.screenWidth / 2 - 800,
      this.screenHeight / 2 + 200,
      "ice2"
    );

    this.ice4 = this.add.image(
      this.screenWidth / 2 - 700,
      this.screenHeight / 2 + 350,
      "ice1"
    );
    this.ice4.setScale(0.7);

    this.ice5 = this.add.image(
      this.screenWidth / 2 + 150,
      this.screenHeight / 2,
      "ice8"
    );
    this.ice5.setScale(0.5);

    this.ice6 = this.add.image(
      this.screenWidth / 2 - 300,
      this.screenHeight / 2 + 400,
      "ice3"
    );
    this.ice6.setScale(1);

    this.ice7 = this.add.image(
      this.screenWidth / 2 + 900,
      this.screenHeight / 2 + 400,
      "ice4"
    );
    this.ice7.setScale(1);

    this.ice8 = this.add.image(
      this.screenWidth / 2 + 800,
      this.screenHeight / 2,
      "ice5"
    );
    this.ice8.setScale(0.8);
    this.ice9 = this.add.image(
      this.screenWidth / 2 + 900,
      this.screenHeight / 2 + 30,
      "ice5"
    );
    this.ice9.setScale(0.5);
    this.ice10 = this.add.image(
      this.screenWidth / 2 + 750,
      this.screenHeight / 2 + 50,
      "ice5"
    );
    this.ice10.setScale(0.3);
    this.ice11 = this.add.image(
      this.screenWidth / 2 + 800,
      this.screenHeight / 2 + 300,
      "ice6"
    );
    this.ice11.setScale(0.6);
    this.ice12 = this.add.image(
      this.screenWidth / 2 - 300,
      this.screenHeight / 2 + 100,
      "ice8"
    );
    this.ice12.setScale(0.4);

    this.ice13 = this.add.image(
      this.screenWidth / 2 + 400,
      this.screenHeight / 2 + 200,
      "ice4"
    );
    this.ice13.setScale(0.4);

    this.ice14 = this.add.image(
      this.screenWidth / 2 + 300,
      this.screenHeight / 2 + 200,
      "ice3"
    );
    this.ice14.setScale(0.8);

    this.ice15 = this.add.image(
      this.screenWidth / 2 + 600,
      this.screenHeight / 2 + 250,
      "ice5"
    );
    this.ice15.setScale(0.7);

    this.mountainIceberg1 = this.add.image(
      this.screenWidth / 2 + 20,
      this.screenHeight / 2 - 100,
      "mountainIceberg1"
    );
    this.mountainIceberg1.setScale(0.8);
    this.mountainIceberg2 = this.add.image(
      this.screenWidth / 2,
      this.screenHeight / 2 - 120,
      "mountainIceberg1"
    );
    this.mountainIceberg2.setScale(0.8);
    this.mountainIceberg3 = this.add.image(
      this.screenWidth / 2 + 100,
      this.screenHeight / 2 - 120,
      "mountainIceberg1"
    );
    this.mountainIceberg3.setScale(0.8);

    this.mountainIceberg4 = this.add.image(
      this.screenWidth / 2 + 230,
      this.screenHeight / 2 - 80,
      "mountainIceberg1"
    );
    this.mountainIceberg4.setScale(0.6);
    this.mountainIceberg5 = this.add.image(
      this.screenWidth / 2 + 250,
      this.screenHeight / 2 - 80,
      "mountainIceberg1"
    );
    this.mountainIceberg5.setScale(0.8);
    this.mountainIceberg6 = this.add.image(
      this.screenWidth / 2 + 350,
      this.screenHeight / 2 - 100,
      "mountainIceberg1"
    );
    this.mountainIceberg6.setScale(0.8);
    this.mountainIceberg7 = this.add.image(
      this.screenWidth / 2 + 500,
      this.screenHeight / 2 - 120,
      "mountainIceberg1"
    );
    this.mountainIceberg7.setScale(0.8);
    this.mountainIceberg8 = this.add.image(
      this.screenWidth / 2 + 500,
      this.screenHeight / 2 - 140,
      "mountainIceberg2"
    );
    this.mountainIceberg8.setScale(0.7);

    this.mountainGlaciers1 = this.add.image(
      this.screenWidth - 80,
      this.screenHeight / 2 - 140,
      "mountainGlaciers1"
    );
    this.mountainGlaciers1.setScale(0.7);
    this.mountainGlaciers2 = this.add.image(
      this.screenWidth / 2 + 100,
      this.screenHeight / 2 - 140,
      "mountainGlaciers1"
    );
    this.mountainGlaciers2.setScale(0.6);

    this.icebergFloor1 = this.add.image(
      this.screenWidth / 2 - 150,
      this.screenHeight - 25,
      "downGlaciers1"
    );
    this.icebergFloor1.setScale(0.5);

    this.icebergSide1 = this.add.image(
      this.screenWidth / 2 - 350,
      this.screenHeight - 20,
      "sideIceberg1"
    );
    this.icebergSide1.setScale(0.4);

    this.downIcebergSide = this.add.image(
      this.screenWidth / 2 - 550,
      this.screenHeight - 20,
      "mountainGlaciers1"
    );
    this.downIcebergSide.setScale(0.5);

    this.floorIcebergSide = this.add.image(
      this.screenWidth - 120,
      this.screenHeight - 20,
      "floorIcebergSide"
    );
    this.floorIcebergSide.setScale(0.5);

    // this.btnLeft = this.add.sprite(
    //   this.screenWidth / 2 - 150,
    //   this.screenHeight / 2 + 300,
    //   "leftButtonMove"
    // );
    // this.btnLeft.setScale(0.5);
    // this.btnLeft.setInteractive();

    // this.btnLeft.on(
    //   "pointerdown",
    //   function () {
    //     this.playerSide.setVelocityX(-20);
    //   },
    //   this
    // );

    // this.btnRight = this.add.sprite(
    //   this.screenWidth / 2 + 150,
    //   this.screenHeight / 2 + 300,
    //   "rightButtonMove"
    // );
    // this.btnRight.setScale(0.5);
    // this.btnRight.setInteractive();

    // this.btnRight.on(
    //   "pointerdown",
    //   function () {
    //     this.playerSide.setVelocityX(20);
    //   },
    //   this
    // );

    this.playerSide = this.physics.add.sprite(
      this.screenWidth / 2 + 100,
      this.screenHeight / 2 + 100,
      "playerSide"
    );
    this.playerSide.setCollideWorldBounds(true);
    this.playerSide.setDamping(true);
    this.playerSide.setDrag(0.99);
    this.playerSide.setScale(0.7);

    this.oilStationSide = this.add.sprite(
      200,
      this.screenHeight / 2 - 100,
      "oilStationSide"
    );
    this.oilStationSide.setScale(0.5);

    this.anims.create({
      key: "rocketConnect",
      frameRate: 8,
      frames: this.anims.generateFrameNumbers("sprRocket", {
        start: 0,
        end: 7,
      }),
      repeat: 0,
    });

    this.rocket = this.add.sprite(
      this.oilStationSide.x + 250,
      this.oilStationSide.y - 150,
      "sprRocket"
    );
    this.rocket.setScale(0.5);
    this.rocket.visible = false;

    this.bar = this.add.image(
      this.screenWidth / 2,
      this.screenHeight / 2 - 300,
      "shotBar"
    );
    this.bar.setScale(0.5);

    this.barPointer = this.physics.add.sprite(
      this.bar.x - 120,
      this.bar.y - 45,
      "barCursor"
    );
    this.barPointer.setScale(0.5);

    this.whatToDo = this.add.text(
      this.screenWidth / 2 - 300,
      this.screenHeight / 2 - 500,
      "Нажмите ПРОБЕЛ чтобы выстрелить",
      {
        font: "32px Courier",
        fill: "#00ff00",
      }
    );

    this.keySpace = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  movement() {
    if (this.cursors.left.isDown) {
      this.playerSide.setVelocityX(-100);
    }
    if (this.cursors.right.isDown) {
      this.playerSide.setVelocityX(20);
    }
    if (this.playerSide.x <= this.screenWidth / 2) {
    }
  }

  updateScore() {
    this.scoreText.setText(this.oil);
  }

  barResult() {
    if (this.keySpace.isDown) {
      if (this.barPointer.x >= this.bar.x + 40) {
        this.spaceState = true;
        this.barPointer.setVelocityX(0);
        this.rocket.visible = true;
        this.rocket.play("rocketConnect");
        this.oil += 2;
        setTimeout(() => this.scene.start("successScene"), 2500);
      } else {
        this.scene.start("resultScene");
      }
    }
    if (!this.spaceState) {
      if (this.barPointer.x <= this.bar.x - 120) {
        this.barPointer.setVelocityX(500);
      } else if (this.barPointer.x >= this.bar.x + 120) {
        this.barPointer.setVelocityX(-500);
      }
    }
  }

  update() {
    this.barResult();
    this.updateScore();
  }
}
