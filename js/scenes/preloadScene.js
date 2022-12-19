class preloadScene extends Phaser.Scene {
  constructor() {
    super({ key: "preloadScene" });
  }

  preload() {
    //#region mainscene
    this.load.image("ocean", "../../assets/ocean.png");
    this.load.image("waves", "../../assets/waves.png");
    this.load.image("waves2", "../../assets/waves2.png");
    this.load.image("smallGlaciers", "../../assets/smallGlaciers.png");
    this.load.image("smallGlaciers2", "../../assets/smallGlaciers2.png");
    this.load.image("player", "../../assets/player/player.png");

    this.load.image("iceberg1", "../../assets/objects/iceberg1.png");
    this.load.image("iceberg2", "../../assets/objects/iceberg2.png");
    this.load.image("downIceberg1", "../../assets/objects/DownIceberg1.png");
    this.load.image("downIceberg2", "../../assets/objects/DownIceberg2.png");
    this.load.image("upIceberg1", "../../assets/objects/UpIceberg1.png");
    this.load.image("upIceberg2", "../../assets/objects/UpIceberg2.png");
    this.load.image("upIceberg3", "../../assets/objects/UpIceberg3.png");
    this.load.image(
      "rectangle",
      "../../assets/objects/sceneChangerRectangle.png"
    );

    this.load.image("enemyIceberg", "../../assets/objects/iceberg1.png");
    this.load.image("enemyIceberg2", "../../assets/objects/iceberg2.png");

    this.load.image("oilStation", "../../assets/objects/oilStation.png");
    this.load.image(
      "distanceRectnagle",
      "../../assets/objects/distanceRectangle.png"
    );
    this.load.image("1000m", "../../assets/scene/1000meter.png");
    this.load.image("500m", "../../assets/scene/500meter.png");
    this.load.image("80m", "../../assets/scene/80meter.png");
    //#endregion
    //#region resultScene
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
    //#endregion
    //#region hookScene
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
    //#endregion
  }

  create() {
    this.scene.start("mainScene");
  }
}
