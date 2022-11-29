const gameHeight = document.body.clientHeigth;
const gameWidth = document.body.clientWidth;

var config = {
  type: Phaser.WEBGL,
  width: gameWidth,
  height: gameHeight,
  backgroundColor: "white",
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      gravity: { x: 0, y: 0 },
      debug: true,
    },
  },
  scene: [menuScene, mainScene, resultScene],
  pixelArt: true,
  roundPixels: true,
};

var game = new Phaser.Game(config);
