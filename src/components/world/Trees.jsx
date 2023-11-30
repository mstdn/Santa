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
 * Tree 1 
 */
const Tree1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/trees/tree-1.glb")
    return (
        // <RigidBody
        //     type="fixed"
        //     // colliders="hull"
        // >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Node-Mesh"].geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Node-Mesh_1"].geometry}
                    material={materials.mat20}
                />
            </group>
        // </RigidBody>
    )
}

/**
 * Tree 1 
 */
const PineTrees = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/trees/pine-tree.glb")
    return (
        // <RigidBody
        //     type="fixed"
        //     // colliders="hull"
        // >
            <group {...props} dispose={null}>
                <group scale={ 0.05 }>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pine_tree_1__001_1.geometry}
                        material={materials["03___Default"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pine_tree_1__001_1_1.geometry}
                        material={materials.Material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pine_tree_1__001_1_2.geometry}
                        material={materials["02___Default"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pine_tree_1_var_1_1.geometry}
                        material={materials["03___Default"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pine_tree_1_var_1_1_1.geometry}
                        material={materials["02___Default"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pine_tree_1__1.geometry}
                        material={materials["03___Default"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.pine_tree_1__1_1.geometry}
                        material={materials["02___Default"]}
                    />
                </group>
            </group>
        // </RigidBody>
    )
}

/**
 * ChristmasTree 
 */
const ChristmasTree = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/trees/christmas-tree.glb")
    return (
        <RigidBody
            type="fixed"
            // colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1089073295.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group314590998.geometry}
                    material={materials.mat12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group214022184.geometry}
                    material={materials.mat2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group922588407.geometry}
                    material={materials.mat12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1410509470.geometry}
                    material={materials.mat2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group179461400.geometry}
                    material={materials.mat12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1832615123.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group411241951.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1633066821.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1164989660.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1127207942.geometry}
                    material={materials.mat12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group2051798186.geometry}
                    material={materials.mat2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1084830891.geometry}
                    material={materials.mat12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group75024073.geometry}
                    material={materials.mat12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group615263083.geometry}
                    material={materials.mat10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group148092846.geometry}
                    material={materials.mat10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group667748054.geometry}
                    material={materials.mat10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group558281359.geometry}
                    material={materials.mat10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1540402439.geometry}
                    material={materials.mat10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1263511113.geometry}
                    material={materials.mat20}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1827880687.geometry}
                    material={materials.mat12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1781168731.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1781168731_1.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh948351503.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh948351503_1.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh792452036.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh792452036_1.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh814621041.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh814621041_1.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1969426104.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1969426104_1.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh77345095.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh77345095_1.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1157521227.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1157521227_1.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh662924655.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh662924655_1.geometry}
                    material={materials.mat21}
                />
            </group>
        </RigidBody>
    )
}



export default function Trees()
{
    return(
        <>
            <Tree1 position={ [ - 27, - 4.5, - 9 ] } scale={ 10 } rotation={ [ 0, Math.PI * 0.5, 0 ] } />
            <Tree1 position={ [ 13, - 1.2, - 45 ] } scale={ 8 } rotation={ [ 0, Math.PI * 1, 0 ] } />
            <Tree1 position={ [ 28, 0.9, - 28 ] } scale={ 9 } rotation={ [ 0, Math.PI * 0.2, 0 ] } />
            <Tree1 position={ [ 30, 2, 0 ] } scale={ 10 } rotation={ [ 0, Math.PI * 0.2, 0 ] } />
            <Tree1 position={ [ 3.2, - 0.2, 22 ] } scale={ 9 } rotation={ [ 0, Math.PI * 0.2, 0 ] } />
            <Tree1 position={ [ - 27, - 3.3, 20 ] } scale={ 10 } rotation={ [ 0, Math.PI * 0.2, 0 ] } />
            
            <PineTrees 
                position={ [ - 29, - 9.3, - 38 ] } 
                scale={ 0.8 } 
                rotation={ [ - Math.PI * 0, Math.PI * 0.9, - Math.PI * 0.05 ] } 
            />
            <PineTrees 
                position={ [ 46, - 1.5, - 69 ] } 
                scale={ 0.8 } 
                rotation={ [ - Math.PI * 0.04, Math.PI * 2.2, Math.PI * 0.03 ] } 
            />
            
            
            <ChristmasTree position={ [ 15, 1, - 16 ] } scale={ 8 } rotation={ [ 0, Math.PI * 0.5, 0 ] } />
        </>
    )
}

useGLTF.preload("./assets/models/world/trees/tree-1.glb")
useGLTF.preload("./assets/models/world/trees/pine-tree.glb")
useGLTF.preload("./assets/models/world/trees/christmas-tree.glb")