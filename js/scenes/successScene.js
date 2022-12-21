class successScene extends Phaser.Scene {
  constructor() {
    super({ key: "successScene" });
    this.screenWidth = window.innerWidth;
    this.screenHeigth = window.innerHeight;
  }

  create() {
    this.title = this.add.text(this.screenWidth / 2, 128, "Победа!", {
      fontFamily: "monospace",
      fontSize: 48,
      fontStyle: "bold",
      color: "#ffffff",
      align: "center",
    });
    this.title.setOrigin(0.5);
  }

  update() {}
}
