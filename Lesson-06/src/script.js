import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Access Helpers
 */
const helper = new THREE.AxesHelper(2);
scene.add(helper);

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.y = 45;
scene.add(mesh)




/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Perspective Camera
 */
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height, 1, 100);
// camera.position.x = 0;
// camera.position.y = 2;
camera.position.z = 3;
scene.add(camera)

/**
 * Orthographic Camera
 */
// const camera = new THREE.OrthographicCamera(- 1, 1, 1, - 1, 0.1, 100);
// camera.position.z = 3;
// camera.position.y = 1;
// camera.lookAt(mesh.position);
// scene.add(camera);

/**
 * Mouse + Camera
 */
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;

    //console.log(`The cursor position without normalization: ${cursor.x, cursor.y}`);

    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = -(event.clientY / sizes.width - 0.5);

    console.log(`The cursor position with normalization: ${cursor.x, cursor.y}`);
})


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


/**
 * Animation
 */

const tick = () => {
    
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
    camera.position.y = cursor.y * 3;
    camera.lookAt(mesh.position);

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);

}


// let time = Date.now();
// const tick = () => {
//     const currentTime = Date.now();
//     const deltaTime = currentTime - time;
//     time = currentTime; 

//     //Update objects
//     mesh.rotation.y += 0.002  * deltaTime;
//     renderer.render(scene,camera);
//     window.requestAnimationFrame(tick);
// }
tick();
