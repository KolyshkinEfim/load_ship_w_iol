class hookScene extends Phaser.Scene {
  constructor() {
    super({ key: "hookScene" });
    this.oil = 0;
  }

  preload() {
    this.load.image("sky", "../../assets/sky.png");
  }

  create() {
    this.backgroundSky = this.add.image(0, 0, "sky");
  }

  update() {}
}
