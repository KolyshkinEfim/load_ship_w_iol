import mainScene from "./scenes/mainScene.js";
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
      gravity: { y: 200 },
      debug: true,
    },
  },
  scene: [mainScene],
};

export default new Phaser.Game(config);
