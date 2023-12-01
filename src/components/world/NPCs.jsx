import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import { Vector3 } from "three"
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'
import useSound from "use-sound"

const Snowperson = (props) => 
{
    const { char, pos, anim, snowman, sound, hasAudio, repeat } = props
    const [ playSnowmanSound ] = useSound(sound, { volume: 1, interrupt: true })
    const [ talk, setTalk ] = useState(false)
    const { animations } = useGLTF("./assets/models/snowperson.glb")
    const { actions } = useAnimations(animations, snowman)
    const model = useGLTF("./assets/models/snowperson.glb")
    const scene = useMemo(() =>
    {
        return SkeletonUtils.clone(model.scene)
    }, [])

    scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      })
    
      useFrame(() =>
      {
          if(char.current)
          {
              const position = new Vector3(pos[0], pos[1], pos[2])
              const charPosition = char.current.translation()
              const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
              
              if(distance < 6 && !talk && hasAudio)
              {
                  playSnowmanSound()
                  setTalk(true)
              } 
              else if(distance > 6 && talk && hasAudio && repeat)
              {
                  setTalk(false)
              }
          }
      })
    
    useEffect(() =>
    {
        actions[ anim ].play()
    })

    return(
        <>
            <primitive ref={ snowman } {...props} object={scene} />
        </>
    )
}

export default function NPCs(props)
{
    const { char } = props
    const SnowPerson1 = useRef()
    const SnowPerson2 = useRef()
    const SnowPerson3 = useRef()
    const SnowPerson4 = useRef()
    const SnowPerson5 = useRef()

    return(
        <>
            {/* Greeting things */}
            <Snowperson 
                position={ [ - 1.7, - 3, 6.9 ] } 
                pos={ [ - 1.7, - 3, 6.9 ] } 
                anim={ "Idle" } 
                scale={ 1 }
                rotation-y={ Math.PI * 1 }
                snowman={ SnowPerson1 }
                char={ char }
                sound={ './assets/audio/snow1.wav' }
                hasAudio={ true }
                repeat={ false }
            />
            <Snowperson 
                position={ [ 5.2, - 3, 3.8 ] } 
                pos={ [ 5.2, - 3, 3.8 ] } 
                anim={ "Wave" } 
                scale={ 1 }
                rotation-y={ Math.PI * 1.2 }
                snowman={ SnowPerson2 }
                char={ char }
                hasAudio={ false }
            />


            {/* Walking around */}
            <Snowperson 
                position={ [ - 8.9, - 4.6, - 27 ] } 
                pos={ [ - 8.9, - 3, - 27 ] } 
                anim={ "Cirlce" } 
                scale={ 1 }
                // rotation-y={ Math.PI * 1.2 }
                snowman={ SnowPerson3 }
                char={ char }
                sound={ './assets/audio/snow2.wav' }
                hasAudio={ true }
                repeat={ true }
            />

            {/* On mountain */}
            <Snowperson 
                position={ [ 51, 21, - 37 ] } 
                pos={ [ 51, 21, - 37 ] } 
                anim={ "Cirlce" } 
                scale={ 0.9 }
                // rotation-y={ Math.PI * 1.2 }
                snowman={ SnowPerson4 }
                char={ char }
                hasAudio={ false }
            />

            {/* In thr igloo */}
            <Snowperson 
                position={ [ 1.7, - 4, - 67 ] } 
                pos={ [ 1.7, - 4, - 67 ] } 
                anim={ "Idle" } 
                scale={ 1.1 }
                rotation-y={ - Math.PI * 0.2 }
                rotation-z={ Math.PI * 0.03 }
                snowman={ SnowPerson5 }
                char={ char }
                hasAudio={ false }
            />
        </>
    )
}

useGLTF.preload("./assets/models/snowperson.glb")