type EventHandler = (event: KeyboardEvent) => void;
type KeyHashMap = { [index: number]: Array<EventHandler> | null };

export default function capture(key: Key, eventHandler: EventHandler) {
    const keyMapList = keyMap[key];
    if (keyMapList == null) {
        keyMap[key] = [];
        capture(key, eventHandler);
    } else {
        keyMapList.push(eventHandler);
    }
}

document.body.onkeydown = (event: KeyboardEvent) => {
    const keyCode = event.keyCode;
    const keyMapList = keyMap[keyCode];
    if (keyMapList == null) return;
    else {
        keyMapList.forEach(handler => handler(event));
    }
}

const keyMap: KeyHashMap = {};

export enum Key {
    LEFT    = 37,
    UP      = 38,
    RIGHT   = 39,
    DOWN    = 40
}