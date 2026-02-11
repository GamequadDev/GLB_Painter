
import { useRotation } from "@/components/fiber/RotationMesh";
import { roughness } from "three/tsl";

interface MeshProps
{
    isRotating: boolean;
    speed: number;
}

export const Mesh = ({isRotating = true, speed = 1}) => {

    const rotationRef = useRotation({isRotating,speed});

    return (<mesh position={[0, 0, 0]} ref={rotationRef}>
        <boxGeometry args={[1, 1, 1]} />


        {/* Material PBR */}
        <meshStandardMaterial color="red" roughness={0.0} metalness={1} envMapIntensity={1.5}/>



    </mesh>)
}