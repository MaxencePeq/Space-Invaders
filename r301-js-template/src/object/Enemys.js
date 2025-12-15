import Phaser from "phaser";
class enemys extends Phaser.GameObjects.Arc {
  constructor(scene) {
    super(
      scene,
      scene.game.canvas.width / 2,
      scene.game.canvas.height / 2,
      20,
      0,
      360,
      false,
      0xff0000,
    );

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }
}

export default enemys;
