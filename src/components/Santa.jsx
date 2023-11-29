import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Santa(props) 
{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/santa.glb")
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="AuxScene">
          <skinnedMesh
            receiveShadow
            castShadow
            name="mesh_char_135"
            geometry={nodes.mesh_char_135.geometry}
            material={materials._100_SaintClaus}
            skeleton={nodes.mesh_char_135.skeleton}
            morphTargetDictionary={nodes.mesh_char_135.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_char_135.morphTargetInfluences}
          />
          <primitive object={nodes.mixamorigHips} />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/santa.glb")