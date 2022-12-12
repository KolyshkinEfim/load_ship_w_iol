class hookScene extends Phaser.Scene {
  constructor() {
    super({ key: "hookScene" });
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.oil = 0;
    this.playerSide = undefined;
    this.cursors = undefined;
  }

  preload() {
    this.load.image("sky", "../../assets/sky.png");
    this.load.image("ocean", "../../assets/hookOcean.png");
    this.load.image("playerSide", "../../assets/player/playerSide.png");
    this.load.image(
      "oilStationSide",
      "../../assets/objects/oilStationSide.png"
    );
    this.load.image(
      "oilStationSide2",
      "../../assets/objects/oilStationSide2.png"
    );
    this.load.image("waves3", "../../assets/waves3.png");
    this.load.image(
      "mountainIceberg1",
      "../../assets/objects/mountainIceberg1.png"
    );
    this.load.image(
      "mountainIceberg2",
      "../../assets/objects/mountainIceber2.png"
    );
    this.load.image(
      "mountainGlaciers1",
      "../../assets/objects/mountainGlaciers1.png"
    );
    this.load.image("downGlaciers1", "../../assets/downGlaciers.png");
    this.load.image("sideIceberg1", "../../assets/objects/icebergSide1.png");
    this.load.image(
      "floorIcebergSide",
      "../../assets/objects/floorIcebergSide.png"
    );
    this.load.image("iceShards1", "../../assets/iceShards1.png");
    this.load.image(
      "rightButtonMove",
      "../../assets/scene/rightButtonMove.png"
    );
    this.load.image("oilScore", "../../assets/items/oilScore.png");
    this.load.image("leftButtonMove", "../../assets/scene/leftButtonMove.png");
    this.load.image("ice1", "../../assets/objects/iceberg4.png");
    this.load.image("ice2", "../../assets/objects/iceberg5.png");
    this.load.image("ice3", "../../assets/objects/iceberg6.png");
    this.load.image("ice4", "../../assets/objects/iceberg7.png");
    this.load.image("ice5", "../../assets/objects/iceberg8.png");
    this.load.image("ice6", "../../assets/objects/iceberg9.png");
    this.load.image("ice7", "../../assets/objects/iceberg10.png");
    this.load.image("ice8", "../../assets/objects/iceberg11.png");

    this.load.spritesheet(
      "sprOilStation",
      "../../assets/objects/oilStationSideAnim.png",
      {
        frameWidth: 1649,
        frameHeigth: 1197,
      }
    );
  }

  create() {
    this.anims.create({
      key: "sprOilStation",
      frames: this.anims.generateFrameNumbers("sprOilStation"),
      frameRate: 20,
      repeat: 0,
    });

    // this.play("sprOilStation");

    this.cursors = this.input.keyboard.createCursorKeys();
    this.backgrounOcean = this.add.image(0, this.screenHeight / 2, "ocean");

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

    this.btnLeft = this.add.sprite(
      this.screenWidth / 2 - 150,
      this.screenHeight / 2 + 300,
      "leftButtonMove"
    );
    this.btnLeft.setScale(0.5);
    this.btnLeft.setInteractive();

    this.btnLeft.on(
      "pointerdown",
      function () {
        this.playerSide.setVelocityX(-20);
      },
      this
    );

    this.btnRight = this.add.sprite(
      this.screenWidth / 2 + 150,
      this.screenHeight / 2 + 300,
      "rightButtonMove"
    );
    this.btnRight.setScale(0.5);
    this.btnRight.setInteractive();

    this.btnRight.on(
      "pointerdown",
      function () {
        this.playerSide.setVelocityX(20);
      },
      this
    );

    this.playerSide = this.physics.add.sprite(
      this.screenWidth - 250,
      this.screenHeight / 2 + 100,
      "playerSide"
    );
    this.playerSide.setCollideWorldBounds(true);
    this.playerSide.setDamping(true);
    this.playerSide.setDrag(0.99);
    this.playerSide.setScale(0.6);

    this.oilStationSide = this.add.sprite(
      200,
      this.screenHeight / 2 - 80,
      "oilStationSide"
    );
    this.oilStationSide.setScale(0.4);

    this.oilStationAnim = this.add.sprite(
      this.screenWidth / 2,
      this.screenHeight / 2,
      "sprOilStation"
    );
    this.play("sprOilStation");

    this.oilStationAnim.setScale(0.2);
  }

  movement() {
    if (this.cursors.left.isDown) {
      this.playerSide.setVelocityX(-100);
    }
    if (this.cursors.right.isDown) {
      this.playerSide.setVelocityX(20);
    }
    if (this.playerSide.x <= this.screenWidth / 2) {
      console.log("done");
    }
  }

  updateScore() {
    this.scoreText.setText(this.oil);
  }

  update() {
    this.movement();
    this.updateScore();
  }
}
