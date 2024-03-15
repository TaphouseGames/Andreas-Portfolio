import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Preload, useFBX, useAnimations } from "@react-three/drei";
import { Group } from "three";

const Andreas = () => {
  return (
    <Canvas shadows camera={{ position: [1.1, 2, -10], fov: 11.5 }}>
      <Suspense>
        <ambientLight intensity={1.9} />
        <ModelPrimitive />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

const ModelPrimitive = () => {
  const groupRef = useRef<Group | null>(null);

  const gltf = useGLTF("/assets/models/65f3200cb30fb00d33f7e4f5.glb");
  const fbx = useFBX("/assets/models/Typing.fbx");

  fbx.animations[0].name = "Typing";
  const { actions } = useAnimations(fbx.animations, groupRef);

  useEffect(() => {
    if (actions["Typing"]) {
      actions["Typing"].reset().play();
    }
  }, [actions]);

  return (
    <group>
      <group ref={groupRef} dispose={null}>
        <primitive
          object={gltf.scene}
          scale={2.9}
          position={[0.3, -2.9, 0.3]}
          rotation={[0, 3, 0]}
        />
      </group>
    </group>
  );
};

export default Andreas;
