class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
  }
}

class Iceberg extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "enemyIceberg", "Iceberg");
    this.body.velocity.x = -Phaser.Math.Between(5, 20);
    this.setScale(0.3);
  }
}
