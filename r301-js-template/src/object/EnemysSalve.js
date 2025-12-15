import Phaser from "phaser";
import enemys from "./Enemys.js";

class EnemysSalve extends Phaser.GameObjects.Group {
  constructor(scene, maxSize, radius) {
    super(scene, {
      classType: enemys,
      maxSize,
      radius,
    });
  }

  spawner() {
    const numberToCreate = Phaser.Math.Between(2, 6);

    for (let i = 0; i < numberToCreate; i++) {
      const RandomColor = Phaser.Display.Color.RandomRGB(60, 255).color;
      const enemy = this.getFirstDead(true);
      if (enemy) {
        const y = 50;
        const x = Phaser.Math.Between(
          enemy.radius,
          this.scene.scale.width - enemy.radius,
        );
        enemy.setPosition(x, y);
        enemy.setFillStyle(RandomColor);

        this.scene.tweens.add({
          targets: enemy,
          x: {
            from: x - 20,
            to: x + 20,
          },
          duration: 2000,
          ease: "Quadratic.InOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }
    const enemies = [...this.getChildren()]; // ... =destructuration, tab1 =[1,2] || tab2= [0,...tab1,3] == [0,1,2,3]
    this.scene.tweens.add({
      targets: enemies,
      y: "+=40",
      ease: "Quadratic.InOut ",
    });
    enemies.forEach((child) => {
      if (child.y > this.scene.scale.height) {
        this.remove(child, true);
        this.emit("enemy:bottomReached", this);
      }
    });
  }
  start() {
    this.scene.time.addEvent({
      delay: 2000,
      loop: true,
      callback: () => this.spawner(), // !!
    });
  }
}
export default EnemysSalve;
