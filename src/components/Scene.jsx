import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 1]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
