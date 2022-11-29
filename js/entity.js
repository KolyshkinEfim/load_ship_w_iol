class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData("type", type);
    this.setData("isDead", false);
  }
}

class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, "player");

    this.setData("speed", 20);
  }

  moveUp() {
    this.body.velocity.y = -this.getData("speed");
  }
  moveDown() {
    this.body.velocity.y = this.getData("speed");
  }
  moveLeft() {
    this.body.velocity.x = -this.getData("speed");
  }
  moveRight() {
    this.body.velocity.x = this.getData("speed");
  }

  onDestroy() {
    this.scene.time.addEvent({
      delay: 1000,
      callback: function () {
        this.scene.scene.start("resultScene");
      },
      callbackScope: this,
      loop: false,
    });
  }
}

class Iceberg extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "enemyIceberg", "Iceberg");
    this.body.velocity.x = -Phaser.Math.Between(5, 20);
    this.setScale(0.3);
  }
}
