class resultScene extends Phaser.Scene {
  constructor() {
    super({ key: "resultScene" });
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

    this.load.image(
      "sprBtnRestart",
      "../../assets/scene/restartSceneButton.png"
    );
    this.load.image(
      "sprBtnRestartHover",
      "../../assets/scene/restartSceneButtonHover.png"
    );

    this.load.image(
      "sprBtnRestartDown",
      "../../assets/scene/restartSceneButtonDown.png"
    );
  }

  create() {
    this.sfx = {}; // for the sound
    this.background = this.add.image(
      this.centerScreen[0],
      this.centerScreen[1],
      "background"
    );
    this.btnRestart = this.add.sprite(
      this.centerScreen[0],
      this.centerScreen[1],
      "sprBtnRestart"
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on(
      "pointerover",
      function () {
        this.btnRestart.setTexture("sprBtnRestartHover");
      },
      this
    );

    this.btnRestart.on("pointerout", function () {
      this.setTexture("sprBtnRestart");
    });

    this.btnRestart.on(
      "pointerdown",
      function () {
        this.btnRestart.setTexture("sprBtnRestartDown");
      },
      this
    );

    this.btnRestart.on(
      "pointerup",
      function () {
        this.btnRestart.setTexture("sprBtnRestart");
        this.scene.start("menuScene");
      },
      this
    );

    this.title = this.add.text(this.centerScreen[0], 128, "Вы проиграли", {
      fontFamily: "monospace",
      fontSize: 48,
      fontStyle: "bold",
      color: "#ffffff",
      align: "center",
    });
    this.title.setOrigin(0.5);
  }
}
