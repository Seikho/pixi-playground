import * as Phaser from 'phaser';

const engine = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
    create,
    preload,
    update
});

function preload() {
    engine.load.image('terrain', 'assets/terrian_atlas.png');
}

function create() {

}

function update() {

}

export { engine as default }