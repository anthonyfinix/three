
export function createCamera() {
    let camera = new THREE.PerspectiveCamera(35,container.clientWidth / container.clientHeight,0.1,100)
    camera.position.set(0,0,10);
    return camera
}
