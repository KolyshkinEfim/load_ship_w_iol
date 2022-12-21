var config = {
  type: Phaser.WEBGL,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "white",
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      gravity: { x: 0, y: 0 },
      // debug: true,
    },
  },
  scene: [preloadScene, mainScene, hookScene, successScene, resultScene],
  pixelArt: true,
  roundPixels: true,
};

var game = new Phaser.Game(config);
