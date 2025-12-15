import Phaser from "phaser";

class Player extends Phaser.GameObjects.Rectangle {
  constructor(scene, width = 50, height = 20, color = 0xffffff) {
    const largeur = scene.game.canvas.width / 2;
    const hauteur = scene.game.canvas.height - height;
    super(scene, largeur, hauteur, width, height, color);

    // 2. Ajouter le joueur dans la scène via l’usine existing
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true, scene.width, scene.height);
  }

  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
  }
}

export default Player;
