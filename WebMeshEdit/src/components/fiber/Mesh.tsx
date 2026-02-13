import { useRef, useState, useMemo, useEffect } from 'react';
import { useRotation } from "@/components/fiber/RotationMesh";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";


interface MeshProps
{
    isRotating: boolean;
    speed: number;
    modelUrl: string;
}

export const Mesh = ({isRotating = true, speed = 1, modelUrl="./models/marble_bust.glb"}) => {

    const { nodes, materials } = useGLTF(modelUrl) as any;
    const textureRef = useRef<THREE.Texture>(null!);

    const canvas = useMemo(() => document.createElement('canvas'), []);

     {/* Material PBR 
    useEffect(() => {
        const ctx = canvas.getContext('2d')!;
        if (!ctx) return;
        
        const targetMesh = nodes.testat

    })*/}


    const rotationRef = useRotation({isRotating,speed});

    return (
    <group dispose={null} ref={rotationRef}>
        {Object.values(nodes).map((node: any, index) => {
            if (node.isMesh) {
                return (
                    <mesh
                    key={index}
                    geometry={node.geometry}
                    material={node.material}
                    position={node.position}
                    scale={node.scale}>

                    {/* Material PBR 

                    <meshStandardMaterial color="red" roughness={0.0} metalness={1} envMapIntensity={1.5}/>*/}
                    </mesh>
                );
            }
        return null;
        })}
    </group>
    );
}

useGLTF.preload("./models/marble_bust.glb");