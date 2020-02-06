
export function createCamera(el) {
    let camera = new THREE.PerspectiveCamera(35,el.clientWidth / el.clientHeight,0.1,100)
    camera.position.set(0,0,10);
    return camera;
}
