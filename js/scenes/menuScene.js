export default class menuScene extends Phaser.Scene {
  constructor() {
    Phaser.Scene.call(this, { key: "menu" });
  }

  preload() {}

  create() {
    this.scene.start("menu");
  }
}
