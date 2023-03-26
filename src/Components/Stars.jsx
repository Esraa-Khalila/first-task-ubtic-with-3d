import { useState, useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Stars(props) {
    const ref = useRef();
    const [sphere] = useState(() =>
      random.inSphere(new Float32Array(1000), { radius: 1.5 })
    );
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled={false}
          {...props}
        >
          <PointMaterial
            transparent
            color="#ffffff"
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  }
  export default Stars