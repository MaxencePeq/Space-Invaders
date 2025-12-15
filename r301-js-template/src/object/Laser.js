import Phaser from "phaser";

class Laser extends Phaser.GameObjects.Ellipse {
  constructor(scene) {
    super(scene, 0, 0, 10, 20, 0xffaa33);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true, scene.width, scene.height);
  }
}

export default Laser;
