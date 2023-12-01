import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import useSound from "use-sound"

const Teleport = (props) =>
{
    const { char, target, from } = props
    const { nodes, materials } = useGLTF("./assets/models/world/teleport.glb")
    const [ playTeleportSound ] = useSound('./assets/audio/teleport.wav')

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(from[0], from[1], from[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(distance < 3)
            {
                char.current.setTranslation( target )
                char.current.setLinvel( { x: 0, y: 0, z: 0 } )
                char.current.setAngvel( { x: 0, y: 0, z: 0 } )
                playTeleportSound()
            }
        }
    })

    return (
        <group {...props} dispose={null}>
          <group rotation={[0, 0, 0]} scale={200}>
                <mesh
                    receiveShadow
                    geometry={nodes.Props_Base_1.geometry}
                    material={materials.DarkGrey}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.Props_Base_2.geometry}
                    material={materials.Main}
                    />
                <mesh
                    receiveShadow
                    geometry={nodes.Props_Base_3.geometry}
                    material={materials.Accent}
                />
          </group>
        </group>
      )
}

export default function Teleports(props)
{
    const { char } = props
    return(
        <>
            <Teleport 
                position={ [ 39, - 2.2, - 64 ] } 
                from={ [ 39, - 2.2, - 64 ] } 
                target={ { x: - 509, y: 15, z: - 216 } }
                rotation-x={ - Math.PI * 0.01 }
                rotation-z={ Math.PI * 0.03 }
                scale={ 1 } 
                char={ char } 
            />
            <Teleport 
                position={ [ - 469, - 9.7, - 188 ] } 
                from={ [ - 469, - 9.7, - 188 ] } 
                target={ { x: 0, y: 15, z: 0 } }
                rotation-x={ - Math.PI * 0.03 }
                //rotation-z={ Math.PI * 0.03 }
                scale={ 1 } 
                char={ char } 
            />

        </>
    )
}

useGLTF.preload("./assets/models/world/teleport.glb")