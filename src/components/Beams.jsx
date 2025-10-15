'use client';

/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils.js';

const noise = `
  float random (in vec2 st) { 
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
  }
  float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
`;

function Beams({ rotation = 0 }) {
  const meshRef = useRef();

  useEffect(() => {
    // Prevent WebGL context loss on hot reloads
    return () => {
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        if (meshRef.current.material) meshRef.current.material.dispose();
      }
    };
  }, []);

  return (
    <group rotation={[0, 0, degToRad(rotation)]}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <mesh ref={meshRef} position={[0, 0, -10]}>
        <planeGeometry args={[50, 50, 32, 32]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.8}
          roughness={0.2}
          emissive="#111"
          emissiveIntensity={0.5}
        />
      </mesh>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={30} />
    </group>
  );
}

export default function BeamsScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      className="absolute inset-0 pointer-events-none"
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#000']} />
      <Beams />
    </Canvas>
  );
}