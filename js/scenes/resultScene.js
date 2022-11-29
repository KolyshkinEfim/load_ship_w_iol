class resultScene extends Phaser.Scene {
  constructor() {
    super({ key: "resultScene" });
  }

  preload() {
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
    this.background = this.add.image(config.width * 0.5, 550, "background");
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      550,
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

    this.title = this.add.text(
      this.game.config.width * 0.5,
      128,
      "Вы проиграли",
      {
        fontFamily: "monospace",
        fontSize: 48,
        fontStyle: "bold",
        color: "#ffffff",
        align: "center",
      }
    );
    this.title.setOrigin(0.5);
  }
}
