"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

const GRAY = new THREE.Color("#8a8a8a");
const RED = new THREE.Color("#ed1111");

type ObjectConfig = {
  chaos: THREE.Vector3;
  order: THREE.Vector3;
  spin: THREE.Vector3;
  shape: "box" | "octahedron" | "torus";
};

// Hand-placed (not random) so the "chaos" reads as genuinely scattered but
// stays identical on every load - Math.random() would cause a hydration
// mismatch between server and client render.
const OBJECT_CONFIGS: ObjectConfig[] = [
  { chaos: new THREE.Vector3(-4.2, -1.8, -1.4), order: new THREE.Vector3(2.6, 0, 0), spin: new THREE.Vector3(1.1, 1.6, 0.4), shape: "box" },
  { chaos: new THREE.Vector3(2.4, -2.6, 1.2), order: new THREE.Vector3(1.9, 1.9, 0), spin: new THREE.Vector3(-1.4, 0.8, 1.1), shape: "octahedron" },
  { chaos: new THREE.Vector3(-3.4, 1.6, 0.8), order: new THREE.Vector3(0, 2.6, 0), spin: new THREE.Vector3(0.7, -1.2, 1.5), shape: "torus" },
  { chaos: new THREE.Vector3(3.8, 1.1, -1.6), order: new THREE.Vector3(-1.9, 1.9, 0), spin: new THREE.Vector3(1.6, 0.5, -0.9), shape: "box" },
  { chaos: new THREE.Vector3(-4.6, -0.6, 1.6), order: new THREE.Vector3(-2.6, 0, 0), spin: new THREE.Vector3(-0.8, 1.4, 0.6), shape: "octahedron" },
  { chaos: new THREE.Vector3(0.8, 3.2, -0.8), order: new THREE.Vector3(-1.9, -1.9, 0), spin: new THREE.Vector3(1.2, -0.6, -1.3), shape: "torus" },
  { chaos: new THREE.Vector3(3.4, 2.8, 1.4), order: new THREE.Vector3(0, -2.6, 0), spin: new THREE.Vector3(-1.5, -1.1, 0.8), shape: "box" },
  { chaos: new THREE.Vector3(4.6, -1.4, -1.2), order: new THREE.Vector3(1.9, -1.9, 0), spin: new THREE.Vector3(0.9, 1.3, -1.4), shape: "octahedron" },
];

function geometryFor(shape: ObjectConfig["shape"]) {
  switch (shape) {
    case "box":
      return <boxGeometry args={[0.62, 0.62, 0.62]} />;
    case "octahedron":
      return <octahedronGeometry args={[0.48, 0]} />;
    case "torus":
      return <torusGeometry args={[0.34, 0.14, 16, 32]} />;
  }
}

function ChaosObject({
  config,
  progress,
  reducedMotion,
}: {
  config: ObjectConfig;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const color = useMemo(() => new THREE.Color(), []);
  const pos = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const mesh = ref.current;
    if (!mesh) return;

    const p = THREE.MathUtils.clamp(progress.get() / 0.55, 0, 1);
    const eased = 1 - Math.pow(1 - p, 3);

    pos.lerpVectors(config.chaos, config.order, eased);
    mesh.position.copy(pos);

    color.lerpColors(GRAY, RED, eased);
    (mesh.material as THREE.MeshStandardMaterial).color = color;
    (mesh.material as THREE.MeshStandardMaterial).emissive = color;
    (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.15 + eased * 0.25;

    if (!reducedMotion) {
      const spinScale = 1 - eased * 0.85;
      mesh.rotation.x += config.spin.x * delta * spinScale;
      mesh.rotation.y += config.spin.y * delta * spinScale;
      mesh.rotation.z += config.spin.z * delta * spinScale;
    }

    const overallOpacity = THREE.MathUtils.clamp(
      progress.get() < 0.82 ? 1 : 1 - (progress.get() - 0.82) / 0.18 * 0.85,
      0.15,
      1
    );
    (mesh.material as THREE.MeshStandardMaterial).opacity = overallOpacity;
  });

  return (
    <mesh ref={ref}>
      {geometryFor(config.shape)}
      <meshStandardMaterial roughness={0.35} metalness={0.4} transparent />
    </mesh>
  );
}

function Logo({ progress }: { progress: MotionValue<number> }) {
  const ref = useRef<THREE.Mesh>(null);
  const texture = useTexture("/images/logo.png");

  useFrame((_, delta) => {
    const mesh = ref.current;
    if (!mesh) return;
    const p = THREE.MathUtils.clamp((progress.get() - 0.45) / 0.2, 0, 1);
    const scale = THREE.MathUtils.lerp(0.4, 1, p);
    mesh.scale.setScalar(scale);
    (mesh.material as THREE.MeshStandardMaterial).opacity = p;
    mesh.rotation.y += delta * 0.25;
  });

  return (
    <mesh ref={ref}>
      <circleGeometry args={[1.1, 48]} />
      <meshStandardMaterial
        map={texture}
        transparent
        roughness={0.3}
        metalness={0.1}
        emissive="#ed1111"
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.sin(i * 12.9898) * 43758.5453 % 1) * 20 - 10;
      arr[i * 3 + 1] = (Math.sin(i * 78.233) * 43758.5453 % 1) * 14 - 7;
      arr[i * 3 + 2] = (Math.sin(i * 37.719) * 43758.5453 % 1) * 10 - 8;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#8a8a8a" size={0.02} sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

function CameraRig({ progress }: { progress: MotionValue<number> }) {
  const { camera, pointer } = useThree();
  useFrame(() => {
    const sceneP = THREE.MathUtils.clamp(progress.get(), 0, 1);
    const sceneOpacityStart = 0.9;
    const targetZ = 8 - sceneP * 0.6;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.4, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.25, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);
    camera.lookAt(0, 0, 0);
    void sceneOpacityStart;
  });
  return null;
}

export default function HeroScene({
  progress,
  reducedMotion,
}: {
  progress: MotionValue<number>;
  reducedMotion: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <pointLight position={[-4, -2, 3]} color="#ed1111" intensity={8} distance={12} />

      <Particles />

      {OBJECT_CONFIGS.map((config, i) => (
        <ChaosObject key={i} config={config} progress={progress} reducedMotion={reducedMotion} />
      ))}

      <Suspense fallback={null}>
        <Logo progress={progress} />
      </Suspense>
      <CameraRig progress={progress} />
    </Canvas>
  );
}
