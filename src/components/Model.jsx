import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const gltf = useGLTF("/model/react_logo.glb");

  return <primitive object={gltf.scene} scale={1.1} {...props} />;
}
