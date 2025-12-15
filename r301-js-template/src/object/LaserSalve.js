import Phaser from "phaser";
import Laser from "./Laser.js";

class LaserSalve extends Phaser.GameObjects.Group {
  constructor(scene, maxSize = 5) {
    super(scene, {
      classType: Laser,
      maxSize,
    });
  }
  fire(x, y) {
    const laser = this.getFirstDead(true);
    if (laser) {
      laser.setPosition(x, y);
      this.scene.tweens.add({
        targets: laser,
        y: 0,
        ease: "linear",
        duration: 1000,
        onComplete: () => {
          this.remove(laser, true);
        },
      }); // 0 en haut
    }
    // this.scene.cameras.main.flash(100);  Il fonctionne mais je suis un peu épiléptique je crois...
  }
}
export default LaserSalve;
