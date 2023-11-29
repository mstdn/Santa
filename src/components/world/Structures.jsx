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
 * Stone bridge 
 */
const Tower = (props) => 
{
    // const { position, scale, rotation } = props
    const { nodes, materials } = useGLTF("./assets/models/world/tower.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
        >
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WatchTower_SecondAge_Level1_1.geometry}
                    material={materials.Stone_Light}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WatchTower_SecondAge_Level1_2.geometry}
                    material={materials.Main}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WatchTower_SecondAge_Level1_3.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WatchTower_SecondAge_Level1_4.geometry}
                    material={materials.Wood_Light}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WatchTower_SecondAge_Level1_5.geometry}
                    material={materials.Wood}
                    />
                </group>
            </group>
        </RigidBody>
    )
}


/**
 * Stone bridge 
 */
const Port = (props) => 
{
    // const { position, scale, rotation } = props
    const { nodes, materials } = useGLTF("./assets/models/world/port.glb")
    return (
        // <RigidBody
        //     type="fixed"
        //     colliders="hull"
        // >
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_FirstAge_Level2_1.geometry}
                    material={materials.Wood_Light}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_FirstAge_Level2_2.geometry}
                    material={materials.Wood}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_FirstAge_Level2_3.geometry}
                    material={materials.Fabric}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Port_FirstAge_Level2_4.geometry}
                    material={materials.Metal_Light}
                    />
                </group>
            </group>
        // </RigidBody>
    )
}


/**
 * Wooden barrel: https://poly.pizza/m/Eko3cjAMW9
 */
const Barrel = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/barrel.glb")
    return (
        <RigidBody
            // type="fixed"
            // colliders="hull"
            gravityScale={ 0.2 }
            friction={ 0.2 }
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Prop_Barrel.geometry}
                    material={materials.Atlas}
                    scale={100}
                />
            </group>
        </RigidBody>
    )
}


/**
 * Cannon: https://poly.pizza/m/Eko3cjAMW9
 */
const Cannon = (props) => 
{
    const body = useRef()
    const { char, pos } = props
    const [ fired, setFired ] = useState(false)
    const { nodes, materials } = useGLTF("./assets/models/world/cannon.glb")
    const [ playCannonSound ] = useSound('./assets/audio/cannon.wav', { volume: 1, interrupt: true })

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(distance < 8 && !fired)
            {
                playCannonSound()
                body.current.applyImpulse( { x: 0, y: 300, z: 0 } )
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
            gravityScale={ 0.9 }
            friction={ 0.2 }
            restitution={ 0.2 }
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Prop_Cannon.geometry}
                    material={materials.Atlas}
                    scale={100}
                />
            </group>
        </RigidBody>
    )
}

/**
 * Shipping Container Structure - https://poly.pizza/m/ebmepOXDRd 
 */
const Container1 = (props) => 
{
    // const { position, scale, rotation } = props
    const { nodes, materials } = useGLTF("./assets/models/world/container-1.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
        >
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={89.708}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_1_1.geometry}
                    material={materials.Grey}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_1_2.geometry}
                    material={materials.Red}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_1_3.geometry}
                    material={materials.Cardboard}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_1_4.geometry}
                    material={materials.Tape}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_1_5.geometry}
                    material={materials.Wood}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_1_6.geometry}
                    material={materials.Grey2}
                    />
                </group>
            </group>
        </RigidBody>
    )
}

/**
 * Shipping Container Structure - https://poly.pizza/m/ilWoURnbZW
 */
const Container2 = (props) => 
{
    // const { position, scale, rotation } = props
    const { nodes, materials } = useGLTF("./assets/models/world/container-2.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
        >
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={89.708}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_3_1.geometry}
                    material={materials.Grey}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_3_2.geometry}
                    material={materials.Blue}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_3_3.geometry}
                    material={materials.Cardboard}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_3_4.geometry}
                    material={materials.Tape}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_3_5.geometry}
                    material={materials.Grey2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_3_6.geometry}
                    material={materials.Wood}
                    />
                </group>
            </group>
        </RigidBody>
    )
}

/**
 * Shipping Container Structure - https://poly.pizza/m/ilWoURnbZW
 */
const Container3 = (props) => 
{
    // const { position, scale, rotation } = props
    const { nodes, materials } = useGLTF("./assets/models/world/container-3.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
        >
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={58.6}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_2_1.geometry}
                    material={materials.Grey}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_2_2.geometry}
                    material={materials.Yellow}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_2_3.geometry}
                    material={materials.Green}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_2_4.geometry}
                    material={materials.Wood}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_2_5.geometry}
                    material={materials.Wood_Light}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_2_6.geometry}
                    material={materials.Cardboard}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_2_7.geometry}
                    material={materials.Tape}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_2_8.geometry}
                    material={materials.Grey2}
                    />
                </group>
            </group>
        </RigidBody>
    )
} 




export default function Structures(props)
{
    const { char } = props

    return(
        <>
            <Port position={ [ 110,  - 20, - 50 ]  } rotation-y={ Math.PI * 0 } scale={ 30 } />
            <Tower position={ [ - 60,  7, 71 ]  } rotation-y={ Math.PI * 0.9 } scale={ 30 } />
            <Barrel position={ [ 57,  - 13.9, - 2 ] } scale={ 5 } />
            <Barrel position={ [ 61,  - 14, - 2.3 ] } scale={ 4.5 } />
            <Cannon position={ [ 62, - 8.2, 22 ] } pos={ [ 62, - 8, 22 ] } scale={ 4 } rotation-y={ Math.PI * 0.25 } char={ char } />
            
            <Container1 position={ [ - 150, 2.2, 62 ]  } rotation-y={ Math.PI * 0.95 } scale={ 3 } />
            <Container2 position={ [ - 138, 2.2, 22 ]  } rotation-y={ Math.PI * 1.9 } scale={ 3 } />
            <Container3 position={ [ - 170, 2.2, 38 ]  } rotation-y={ Math.PI * 0.5 } scale={ 3 } />
        </>
    )
}

useGLTF.preload("./assets/models/world/tower.glb")
useGLTF.preload("./assets/models/world/barrel.glb")
useGLTF.preload("./assets/models/world/cannon.glb")
useGLTF.preload("./assets/models/world/port.glb")
useGLTF.preload("./assets/models/world/container-1.glb")
useGLTF.preload("./assets/models/world/container-2.glb")
useGLTF.preload("./assets/models/world/container-3.glb")
