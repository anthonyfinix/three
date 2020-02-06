import * as THREE from 'three';
import { WebGLRenderer } from 'three';

let scene;
let container;
let camera;
let light;
let mesh;
let renderer;
export function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color('skyblue');
    container = document.getElementById('container');
    let aspect = container.clientWidth/container.clientHeight;
    camera = new THREE.PerspectiveCamera(35,aspect,0.1,100);
    let geometry = new THREE.BoxBufferGeometry(2,2,2);
    let material = new THREE.MeshBasicMaterial();
    mesh = new THREE.Mesh(geometry, material);
    scene.add(camera);
    scene.add(mesh);
    camera.position.set(0,0,10)

    renderer = new WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio)
    container.append(renderer.domElement);
    renderer.render(scene,camera);

}