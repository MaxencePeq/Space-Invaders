import Phaser from "phaser";

export default {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    width: 800,
    height: 600,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
  },
};
