import mainScene from "./scenes/mainScene.js";
import menuScene from "./scenes/menuScene.js";
import resultScene from "./scenes/resultScene.js";
const gameHeight = document.body.clientHeigth;
const gameWidth = document.body.clientWidth;

var config = {
  type: Phaser.AUTO,
  width: gameWidth,
  height: gameHeight,
  parent: "game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [mainScene],
};

let game = new Phaser.Game(config);
