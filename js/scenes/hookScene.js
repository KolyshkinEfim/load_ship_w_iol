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
  }

  create() {
    this.backgrounOcean = this.add.image(500, 0, "ocean");
    this.backgroundSky = this.add.image(0, 0, "sky");
    this.playerSide = this.add.sprite(
      this.screenWidth - 250,
      this.screenHeight / 2 + 100,
      "playerSide"
    );
    this.playerSide.setScale(0.5);
    this.oilStationSide = this.add.sprite(
      200,
      this.screenHeight / 2 - 150,
      "oilStationSide"
    );
    this.oilStationSide.setScale(0.5);
    // this.setOrigin(0.5, 0.5);
  }

  update() {}
}
