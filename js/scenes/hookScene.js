class hookScene extends Phaser.Scene {
  constructor() {
    super({ key: "hookScene" });
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.oil = 0;
  }

  preload() {
    this.load.image("sky", "../../assets/sky.png");
    this.load.image("ocean", "../../assets/hookOcean.png");
    this.load.image("playerSide", "../../assets/player/playerSide.png");
    this.load.image(
      "oilStationSide",
      "../../assets/objects/oilStationSide.png"
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
  }

  create() {
    this.backgrounOcean = this.add.image(0, this.screenHeight / 2, "ocean");

    this.backgroundSky = this.add.image(0, 0, "sky");

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
    this.downIcebergSide.setScale(0.4);

    this.floorIcebergSide = this.add.image(
      this.screenWidth - 120,
      this.screenHeight - 20,
      "floorIcebergSide"
    );
    this.floorIcebergSide.setScale(0.5);

    this.playerSide = this.add.sprite(
      this.screenWidth - 250,
      this.screenHeight / 2 + 100,
      "playerSide"
    );
    this.playerSide.setScale(0.6);

    this.oilStationSide = this.add.sprite(
      200,
      this.screenHeight / 2 - 80,
      "oilStationSide"
    );
    this.oilStationSide.setScale(0.4);
  }

  update() {}
}
