import React, { useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import useSound from "use-sound"

/**
 * House 
 */
// const HouseX = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/house-x.glb")
//     return (
//         <RigidBody
//             type="fixed"
//             colliders="trimesh"
//         >
//             <group scale={ 22 } {...props} dispose={null}>
               
//             </group>
//         </RigidBody>
//     )
// }



/**
 * Iglo
 */
const Iglo = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/iglo.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Default009.geometry}
                    material={materials._crayfishdiffuse}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials["_crayfishdiffuse-2"]}
                />
            </group>
        </RigidBody>
    )
}


/**
 * Cannon: https://poly.pizza/m/Eko3cjAMW9
 */
const Gifts = (props) => 
{
    const body = useRef()
    const { char, pos } = props
    const [ fired, setFired ] = useState(false)
    const { nodes, materials } = useGLTF("./assets/models/world/gifts.glb")
    // const [ playCannonSound ] = useSound('./assets/audio/cannon.wav', { volume: 1, interrupt: true })

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(distance < 8 && !fired)
            {
                // playCannonSound()
                body.current.applyImpulse( { x: 0, y: 100, z: 0 } )
                setFired(true)
            } 
            else if(distance > 8 && fired)
            {
                setFired(false)
            }
        }
    })

    return (
        <RigidBody
            ref={ body }
            gravityScale={ 1 }
            friction={ 0.2 }
            restitution={ 0.1 }
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Node-Mesh"].geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Node-Mesh_1"].geometry}
                    material={materials.mat9}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Node-Mesh_2"].geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Node-Mesh_3"].geometry}
                    material={materials.mat12}
                />
            </group>
        </RigidBody>
    )
}





export default function Structures(props)
{
    const { char } = props

    return(
        <>
            <Iglo 
                position={ [ 10, -  5.3, - 40 ] }
                scale={ 0.8 } 
                rotation-y={ Math.PI * 1 }
                rotation-z={ - Math.PI * 0.03 }
            />

            <Gifts 
                position={ [ - 6.4, - 5, - 26.7 ] } 
                pos={ [ - 6.4, - 5, - 26.7 ] } 
                scale={ 1 } 
                rotation-y={ Math.PI * 0.25 } 
                char={ char } 
            />
        </>
    )
}

useGLTF.preload("./assets/models/world/iglo.glb")
useGLTF.preload("./assets/models/world/gifts.glb")
