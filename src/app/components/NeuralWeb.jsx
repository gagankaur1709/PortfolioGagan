"use client";

import React, { useRef, useMemo, useEffect } from 'react'; // Import useEffect
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralPoints({ count = 5000 }) {
  const ref = useRef();
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current = [x, y];
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    const radius = 3;
    for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360); 
        const phi = THREE.MathUtils.randFloatSpread(360); 
        p[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
        p[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        p[i * 3 + 2] = radius * Math.cos(theta);
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (mouse.current[0] * Math.PI) / 15, 0.02);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (mouse.current[1] * Math.PI) / 15, 0.02);
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff" 
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

const NeuralWeb = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <NeuralPoints />
    </Canvas>
  );
};

export default NeuralWeb;