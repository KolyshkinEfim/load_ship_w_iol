class menuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });
  }

  screenSetting(cgw, cgh) {
    cgw = cgw * 0.5;
    cgh = cgh * 0.5;
    const result = [cgw, cgh];
    return result;
  }

  preload() {
    this.centerScreen = this.screenSetting(
      window.innerWidth,
      window.innerHeight
    );

    this.load.image(
      "background",
      "../../assets/scene/startSceneBackground.png"
    );
    this.load.image("sprBtnPlay", "../../assets/scene/startSceneButton.png");
    this.load.image(
      "sprBtnPlayHover",
      "../../assets/scene/startSceneButtonHover.png"
    );
    this.load.image(
      "sprBtnPlayDown",
      "../../assets/scene/startSceneButtonDown.png"
    );
  }

  create() {
    this.sfx = {}; //for the sound
    this.background = this.add.image(
      this.centerScreen[0],
      this.centerScreen[1],
      "background"
    );

    this.btnPlay = this.add.sprite(
      this.centerScreen[0],
      this.centerScreen[1],
      "sprBtnPlay"
    );

    this.btnPlay.setInteractive();

    this.btnPlay.on(
      "pointerover",
      function () {
        this.btnPlay.setTexture("sprBtnPlayHover");
      },
      this
    );

    this.btnPlay.on("pointerout", function () {
      this.setTexture("sprBtnPlay");
    });

    this.btnPlay.on(
      "pointerdown",
      function () {
        this.btnPlay.setTexture("sprBtnPlayDown");
      },
      this
    );

    this.btnPlay.on(
      "pointerup",
      function () {
        this.btnPlay.setTexture("sprBtnPlay");
        this.scene.start("mainScene");
      },
      this
    );

    this.title = this.add.text(this.centerScreen[0], 128, "ShipGame", {
      fontFamily: "monospace",
      fontSize: 48,
      fontStyle: "bold",
      color: "#ffffff",
      align: "center",
    });
    this.title.setOrigin(0.5);
  }
}
