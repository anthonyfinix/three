import { Scene, Color } from 'three';

export function createScene() {
    let scene = new Scene();
    scene.background = new Color('skyblue');
    return scene;
}