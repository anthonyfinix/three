import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createScene } from './scene';
import { createCamera } from './camera';
import { createMeshes } from './mesh';
import { createLights } from './lights';
import { createRenderer } from './renderer';
let container;
export function init() {
    container = document.getElementById('container');
    let scene = createScene();
    let camera = createCamera(container);
    let mesh = createMeshes();
    let light = createLights();
    let renderer = createRenderer(container);
    let controller = new OrbitControls(camera,renderer.domElement);
    scene.add(camera);
    scene.add(mesh);
    scene.add(light.mainLight, light.ambientLight)
    camera.position.set(0, 0, 10)
    container.append(renderer.domElement);
    renderer.setAnimationLoop(()=>{
        update();
        render(renderer);
    })
    function update(){
        controller.update();
    }
    function render(){
        renderer.render(scene, camera);
    }

}