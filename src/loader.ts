import * as Pixi from 'pixi.js';
import renderer from './renderer';

export default function loader() {
    const stage = new Pixi.Container();
    
    // Load sprite relative to web server root
    const texture = Pixi.Texture.fromImage('/assets/sprite.jpg');
        
    const character = new Pixi.Sprite(texture);
    character.anchor.x = 0.5;
    character.anchor.y = 0.5;
    
    character.position.x = 200;
    character.position.y = 200;
    
    stage.addChild(character);
    
    function animate() {
        requestAnimationFrame(animate);
        character.rotation += 0.1;
        renderer.render(stage);
    }
    
    // Begin animating
    animate();
}