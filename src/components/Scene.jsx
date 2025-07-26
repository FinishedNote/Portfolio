import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function Scene() {
  useGSAP(() => {
    gsap.from(".canvas", {
      opacity: 0,
      x: 40,
      duration: 1,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1.5,
    });
  });

  return (
    <Canvas camera={{ position: [0, 1, 5] }} className="canvas">
      <ambientLight intensity={1} />
      <directionalLight position={[3, 3, 1]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
