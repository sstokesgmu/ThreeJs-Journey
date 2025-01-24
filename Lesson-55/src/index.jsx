import './style.css'
import ReactDOM from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import Scene from './components/Canvas'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <>
        <Canvas>
            <Scene /> {/*Three.js canvas*/}
        </Canvas>
        
    </>
)