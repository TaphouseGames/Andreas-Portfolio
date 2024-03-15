"use client";

import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

const ROTATION_SPEED_DIVISOR: number = 25;
const SPHERE_RADIUS: number = 2.4;

function generateRandomPointsInSphere(count: number): Float32Array {
  const result = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const _radius = SPHERE_RADIUS * Math.cbrt(Math.random());

    const x = _radius * Math.sin(phi) * Math.cos(theta);
    const y = _radius * Math.sin(phi) * Math.sin(theta);
    const z = _radius * Math.cos(phi);

    result[i * 3] = x;
    result[i * 3 + 1] = y;
    result[i * 3 + 2] = z;
  }

  return result;
}

const Stars = (props: { count: number; color: string; size: number }) => {
  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / ROTATION_SPEED_DIVISOR;
      ref.current.rotation.y += delta / ROTATION_SPEED_DIVISOR;
    }
  });

  const spherePoints = generateRandomPointsInSphere(props.count);

  return (
    <group rotation={[Math.PI / 1, Math.PI / 1, Math.PI / 1]}>
      <Points ref={ref} positions={spherePoints} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={props.color}
          size={props.size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Stars count={500} color="#FF355E" size={0.004} />
          <Stars count={200} color="#7DF9FF" size={0.003} />
          <Stars count={200} color="#39FF14" size={0.003} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
