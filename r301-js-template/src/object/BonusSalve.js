import Phaser from "phaser";   
import Bonus from "./Bonus.js";

class BonusSalve extends Phaser.GameObjects.Group {
    constructor(scene, maxSize, radius) {
        super(scene, {
            classType: Bonus,
            maxSize,
            radius,
        });
    }
    #setTimeout(){
        this.scene.time.addEvent({
            callback: () => {
                const bonus = this.getFirstDead(true);
                if (bonus) {
                    const y = 50;
                    const x = Phaser.Math.Between(
                        bonus.radius,
                        this.scene.scale.width - bonus.radius,
                    );
                    bonus.setPosition(x, y);
                    const bonuses = [...this.getChildren()];
                    this.scene.tweens.add({
                        targets: bonus,
                        y: this.scene.scale.height + 40,
                        ease: "linear",
                        duration: 1000,
                    });
                    bonuses.forEach((child) => {
                    if (child.y > this.scene.scale.height) {
                        this.remove(child, true);
                    }
                }); 
                }
            }
        
        });
    }
    start() {
        let randomTimer = Phaser.Math.Between(2, 4) * 1000;
        this.scene.time.addEvent({
            delay: randomTimer,
            loop: true,
            callback: () => {
                this.#setTimeout(); // !!
                randomTimer = Phaser.Math.Between(2, 4) * 1000;
            }
        });
    }
}
export default BonusSalve;