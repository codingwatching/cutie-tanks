import Phaser from 'phaser'
import { loadScene } from "./scenes/loadScene";
import { menuScene } from "./scenes/menuScene";
import { playerSelectScene } from "./scenes/playerSelectScene";
import { modeScene } from    "./scenes/modeScene";
import { settingsScene } from  "./scenes/settingsScene";
import { gameScene } from "./scenes/gameScene";
import { endScene } from "./scenes/endScene";

const config = {
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 }
        }
    },
    input: {
        gamepad: true
    },
    scene: [
        loadScene,
        menuScene,
        playerSelectScene,
        modeScene,
        settingsScene,
        gameScene,
        endScene
    ],
    render: {
        pixelArt: true,
        antialias: true
    }
}

export default new Phaser.Game(config)