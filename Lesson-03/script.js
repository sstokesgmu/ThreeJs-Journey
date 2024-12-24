//console.log("Hello from JavaScript");
import * as THREE from "three";


//Scene
const scene = new THREE.Scene();

//Objects
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

//Canvas Dimensions
const canvasDim = {
    width: 800,
    height: 600,
}

//Camera
const camera = new THREE.PerspectiveCamera(75, canvasDim.width/canvasDim.height);
//lets move the camera backward
camera.position.z = 3;
scene.add(camera);

//Render
const canvas = document.querySelector("canvas.webgl");

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(canvasDim.width, canvasDim.height);
renderer.render(scene, camera);

//Everything is centered when added to the canvas, so now we need to set all of our props in space
//! On line 23 move the camera backward in the z axis

