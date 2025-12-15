import Phaser from "phaser";
import config from "./config";
import Play from "./scene/Play";

const game = new Phaser.Game(config);
game.scene.add("play", Play, true);
