class menuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });
  }

  preload() {
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
    this.add.image(this.game.config.width * 0.5, 550, "background");
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      550,
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

    this.title = this.add.text(this.game.config.width * 0.5, 128, "ShipGame", {
      fontFamily: "monospace",
      fontSize: 48,
      fontStyle: "bold",
      color: "#ffffff",
      align: "center",
    });
    this.title.setOrigin(0.5);
  }
}
