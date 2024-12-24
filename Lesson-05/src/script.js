import * as THREE from 'three'
import './style.css'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
//renderer.render(scene, camera)

/**
 * Animate
 */

// const tick = () => {
//     //Update objects
//     mesh.rotation.y += 0.01;
//     //Reneder
//     renderer.render(scene, camera);
    
//     //Call tick again on the next frame
//     window.requestAnimationFrame(tick);
// }
// tick();

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
// tick()

/**
 * Animating using the clock
 */

// const clock = new THREE.Clock();
// const tick = () => {
//     const elapsedTime = clock.getElapsedTime();
//     mesh.rotation.y = elapsedTime * 2;

//     //Animating position
//     mesh.position.x = Math.cos(elapsedTime);
//     mesh.position.y = Math.sin(elapsedTime);

//     renderer.render(scene, camera);
//     window.requestAnimationFrame(tick);
// }
// tick();

/**
 * Animating with Gasp
 */

gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
const tick = () => {
    //Render
    renderer.render(scene, camera);
    //Call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick();