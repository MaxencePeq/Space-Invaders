import Phaser from "phaser";

class Bonus extends Phaser.GameObjects.Star {
    constructor(scene) {
        super(
            scene,
            0,
            0,
            5,
            10,
            20,
            0xffff00,
        );
        this.radius = 20;
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
}
export default Bonus;