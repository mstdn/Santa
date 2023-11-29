import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"

const Snowperson = (props) => 
{
    const { char, pos, anim, snowman } = props
    const { nodes, materials, animations } = useGLTF("./assets/models/snowperson.glb")
    const { actions } = useAnimations(animations, snowman)

    console.log("beep")
    
    // useFrame(() =>
    // {
    //     if(snowperson.current)
    //     {
    //         // console.log(snowperson.current)
    //     }
    // })
    
    // useEffect(() =>
    // {
    //     actions[ anim ].play()
    // })

    return(
        <>
            <group ref={ snowman } {...props} dispose={null}>
                <group name="AuxScene">
                    <skinnedMesh
                        receiveShadow
                        castShadow
                        name="Body_11"
                        geometry={nodes.Body_11.geometry}
                        material={materials._092_Chili}
                        skeleton={nodes.Body_11.skeleton}
                        morphTargetDictionary={nodes.Body_11.morphTargetDictionary}
                        morphTargetInfluences={nodes.Body_11.morphTargetInfluences}
                    />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </>
    )
}

export default function NPCs(props)
{
    const { char } = props
    const SnowPerson1 = useRef()
    const SnowPerson2 = useRef()

    return(
        <>
            <Snowperson 
                position={ [ 6.6, - 3, 0 ] } 
                pos={ [ 6.6, - 3, 0 ] } 
                // anim={ "Idle" } 
                // scale={ 1 }
                rotation-y={ Math.PI * 1 }
                snowman={ SnowPerson1 }
                char={ char }
            />
            <Snowperson 
                position={ [ 2.1, - 3, 3 ] } 
                pos={ [ 2.1, - 3, 3 ] } 
                // anim={ "Wave" } 
                // scale={ 1 }
                rotation-y={ Math.PI * 1 }
                snowman={ SnowPerson2 }
                char={ char }
            />
        </>
    )
}

useGLTF.preload("./assets/models/snowperson.glb")