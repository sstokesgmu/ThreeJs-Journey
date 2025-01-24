import {Canvas, useFrame} from  '@react-three/fiber'
import {MeshNormalMaterial, TorusGeometry} from 'three'
import {useRef} from 'react'
 
export default function Scene(){

    const cubeRef = useRef();
    const iconRef = useRef();
    const sphereRef = useRef();
    {useFrame(() => {
        console.log('tick');
        cubeRef.current.rotation.y += 0.01;
        iconRef.current.rotation.z -= 0.01;
        sphereRef.current.rotation.y += 0.01;
    })}
    return (
        <>
            <mesh ref={sphereRef} position-x={-3}>
                <sphereGeometry/>
                <meshBasicMaterial color='red' wireframe/>
            </mesh>
            <mesh ref={cubeRef} position-x={2.5} scale={1.5} rotation-y={Math.PI * 0.25}>
                <boxGeometry />
                <meshBasicMaterial color="blue" wireframe/>
            </mesh>
            <mesh ref = {iconRef} rotation-x={Math.PI * 0.5}>
                <icosahedronGeometry args={[1]}/>
                <meshBasicMaterial color="green" wireframe/>                
            </mesh>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry/>
                <meshBasicMaterial color="darkgrey"/>
            </mesh>
        </>
    );
}