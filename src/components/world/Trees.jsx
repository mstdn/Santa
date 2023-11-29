import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

/**
 * House 
 */
// const HouseX = (props) => 
// {
    // const { position, scale } = props
//     const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-.glb")
//     return (
//         <RigidBody
//             type="fixed"
//             colliders="trimesh"
            // position={ position }
            // scale={ scale }
//         >
//             <group scale={ 22 } {...props} dispose={null}>
               
//             </group>
//         </RigidBody>
//     )
// }


/**
 * Palm 1 
 */
const Palm1 = (props) => 
{
    const { position, scale, rotation } = props
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-1.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
            position={ position }
            scale={ scale }
            rotation={ rotation }
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_PalmTree_2.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </RigidBody>
    )
}

/**
 * Palm 2
 */
const Palm2 = (props) => 
{
    const { position, scale, rotation } = props
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-2.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
            position={ position }
            scale={ scale }
            rotation={ rotation }
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_PalmTree_3.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </RigidBody>
    )
}

/**
 * Palm 3
 */
const Palm3 = (props) => 
{
    const { position, scale, rotation } = props
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-3.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
            position={ position }
            scale={ scale }
            rotation={ rotation }
        >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Environment_PalmTree_1.geometry}
                    material={materials.Atlas}
                    scale={100}
                />
        </RigidBody>
    )
}


export default function Trees()
{
    return(
        <>
            <Palm1 position={ [ 7.3, - 1.3, - 5.8 ] } scale={ 4 } />
            <Palm2 position={ [ - 9.4, - 1.3, 0 ] } scale={ 4 } rotation={ [ 0, Math.PI * 0.5, 0 ] } />
            <Palm2 position={ [ 9.9, 1, 26 ] } scale={ 4.1 } rotation={ [ 0, Math.PI * 1, 0 ] } />
            <Palm3 position={ [ - 16.5, 2.5, 30 ] } scale={ 3.4 } rotation={ [ 0, Math.PI * 0.4, 0 ] } />
            <Palm3 position={ [ 1, 5, 60 ] } scale={ 3.4 } rotation={ [ 0, Math.PI * 0.4, 0 ] } />
            <Palm1 position={ [ - 11, 5, 70 ] } scale={ 4.2 } rotation={ [ 0, Math.PI * 1.5, 0 ] } />
            <Palm3 position={ [ 30, - 6.3, 1.5 ] } scale={ 4.7 } rotation={ [ 0, Math.PI * 0.4, 0 ] } />
            <Palm2 position={ [ 57, - 12, 28 ] } scale={ 5 } rotation={ [ 0, Math.PI * 0.9, 0 ] } />
        </>
    )
}

useGLTF.preload("./assets/models/world/trees/palm-1.glb")