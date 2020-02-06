let mesh;
export function createMeshes() {
    let geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    let material = new THREE.MeshStandardMaterial({
        color: 0x333333, // darkgrey
        flatShading: true,
    })
    mesh = new THREE.Mesh(geometry,material)
    return mesh
}