import Phaser from "phaser";
import Player from "../object/Player.js";
import Laser from "../object/Laser.js";
import LaserSalve from "../object/LaserSalve.js";
import enemys from "../object/Enemys.js";
import EnemysSalve from "../object/EnemysSalve.js";
import BonusSalve from "../object/BonusSalve.js";

class Play extends Phaser.Scene {
  create() {
    this.score = 0;
    this.scoretext = this.add
      .text(20, 20, `Score : ${this.score}`)
      .setFontSize(30)
      .setOrigin(0, 0)
      .setDepth(100);

    this.lives = 5;
    this.livestext = this.add
      .text(20, 60, `Vies : ${this.lives}`)
      .setFontSize(30)
      .setOrigin(0, 0)
      .setDepth(100);

    this.player = new Player(this, 50, 20);
    this.LaserSalve = new LaserSalve(this);
    this.enemysSalve = new EnemysSalve(this, 50, 20);
    this.bonusSalve = new BonusSalve(this, 20, 20);


    // would return an object containing the properties (Left and Right) mapped to Q and D Phaser.Input.Keyboard.Key objects.
    this.keys = this.input.keyboard.addKeys({
      right: Phaser.Input.Keyboard.KeyCodes.D,
      left: Phaser.Input.Keyboard.KeyCodes.Q,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
    });
    this.keys.space.on("down", () => {
      this.LaserSalve.fire(this.player.x, this.player.y);
    });
    this.enemysSalve.start();
    this.bonusSalve.start();
    //this.physics.world.createDebugGraphic();

    this.physics.add.overlap(
      this.LaserSalve,
      this.enemysSalve,
      (laser, enemy) => {
        this.LaserSalve.remove(laser, true);
        this.enemysSalve.remove(enemy, true);
        this.scoretext.setText(`Score : ${++this.score}`);
      },
    );
    
    this.physics.add.overlap(
      this.player,
      this.bonusSalve,
      (player, bonus) => {
        this.bonusSalve.remove(bonus, true);
        this.scoretext.setText(`Score : ${(this.score += 50)}`);
      },
    );
    
    this.enemysSalve.on("enemy:bottomReached", () => {
      this.livestext.setText(`Vie: ${(this.lives -= 1)}`);
      if (this.lives <= 0) {
        this.livestext.setText(`Vie: 0`);
        this.physics.pause();
        this.add
          .text(this.game.canvas.width / 2, this.game.canvas.height / 2, "Game Over", {
            fontSize: 64,
            color: "#ff0000",
          })
          .setOrigin(0.5)
          .setDepth(200);
        this.scene.pause();
      }
    });
  }
  update() {
    if (this.keys.left.isDown) {
      this.player.moveLeft();
    }
    if (this.keys.right.isDown) {
      this.player.moveRight();
    }
  }
}

export default Play;
