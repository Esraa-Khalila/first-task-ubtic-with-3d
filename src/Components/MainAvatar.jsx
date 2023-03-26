import {
  Stage,
  PresentationControls,
} from "@react-three/drei";
import React from "react";
import { Avatar } from "./Avatar";

const MainAvatar = () => {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Avatar/>
        </Stage>

      </PresentationControls>
      <ambientLight intensity={0.2} />
      <directionalLight />
    </>
  );
};

export default MainAvatar;
