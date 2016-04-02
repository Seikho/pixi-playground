// Phaser is available globally via index.html

/**
 * Singleton.. Why the hell would we want multiple of this monstrosity
 */
export default class Engine {
    
    static game = new Phaser.Game(800, 600, Phaser.AUTO, 'content',  {
        preload: Engine.preload,
        create: Engine.create,
        update: Engine.update
    });
    
    static preload() {
        Engine.game.load.image('terrain', 'assets/terrain_atlas.png');
    }
    
    static create() {
        Engine.game.math.snapToFloor(1, 32);
    }
    
    static update() {
        
    }
}