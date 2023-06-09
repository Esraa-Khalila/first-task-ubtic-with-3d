/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Avatar.gltf
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../Context/Context";

export function Avatar(props) {
  const { nodes, materials } = useGLTF("/Avatar.gltf");
  const { cloth } = useCustomization();
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Joint} />
      <primitive object={nodes.body} />
      <primitive object={nodes.eye_L} />
      <primitive object={nodes.eye_R} />
      <primitive object={nodes.eyelash_L} />
      <primitive object={nodes.eyelash_R} />
      <primitive object={nodes.tooth} />
      <mesh
        geometry={nodes.Cloth_mesh.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth === 1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_1.geometry}
        material={materials["FABRIC 2_FRONT_490873"]}
        visible={cloth === 1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_2.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth === 1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_3.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth === 1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_4.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth === 1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_5.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth === 1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_6.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_7.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_8.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_9.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth==1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_10.geometry}
        material={materials["FABRIC 1_FRONT_490868"]}
        visible={cloth==1}
      />
      <mesh
        geometry={nodes.Cloth_mesh_11.geometry}
        material={materials["LACE SLV_FRONT_490878"]}
        visible={cloth===2}
      />
      <mesh
        geometry={nodes.Cloth_mesh_12.geometry}
        material={materials["LACE SLV_FRONT_490878"]}
        visible={cloth===2}
      />
      <mesh
        geometry={nodes.BindedTrim_500918.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_501401.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_501694.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_501991.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_502285.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_502583.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_502636.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_502686.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_502795.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
      <mesh
        geometry={nodes.BindedTrim_502904.geometry}
        material={materials.Material491072}
        visible={cloth===1}
      />
    </group>
  );
}

useGLTF.preload("/Avatar.gltf");
