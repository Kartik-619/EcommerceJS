// studioLights.jsx
import { Environment, Lightformer, SpotLight } from "@react-three/drei"
// Import Group from @react-three/fiber, NOT from "three"

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer/>
                    <Lightformer 
                        form="rect"
                        intensity={10}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <SpotLight 
                position={[-2,10,5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI*0.2}/>
                  <SpotLight 
                position={[0,-25,10]}
                angle={0.15}
                decay={0}
                intensity={Math.PI*0.2}/>
                  <SpotLight 
                position={[0,15,5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI*1}/>

        </group>
    )
}

export default StudioLights;