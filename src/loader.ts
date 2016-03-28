import * as Pixi from 'pixi.js';
import renderer from './renderer';
import character from './character';
import capture, { Key } from './capture';

export default function loader() {
    const stage = new Pixi.Container();
    const movement = 5;
    
    character.anchor.x = 0.5;
    character.anchor.y = 0.5;
    
    character.position.x = 200;
    character.position.y = 200;
    
    stage.addChild(character);
    
    capture(Key.LEFT, event => {
        if (character.position.x <= 0 + movement) return;
        character.position.x -= movement;
    });
    
    capture(Key.RIGHT, event => {
        if (character.position.x >= 800 - movement) return;
        character.position.x += movement;
    });
    
    capture(Key.UP, event => {
        if (character.position.y <= 0 + movement) return;
        character.position.y -= movement;
    });
    
    capture(Key.DOWN, event => {
        if (character.position.y >= 600 - movement) return;
        character.position.y += movement;
    });
    
    setInterval(() => character.scale.x = character.scale.x *= -1, 750);
    
    function animate() {
        requestAnimationFrame(animate);        
        renderer.render(stage);
        
    }        
    
    // Begin animating
    animate();
}

