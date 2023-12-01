import { Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Vector3 } from "three"
import useSound from "use-sound"

const GameText = (props) => 
{
    const { 
        text, 
        color, 
        size, 
        width, 
        position, 
        rotationY, 
        char, 
        sound, 
        pos, 
        repeat, 
        dis,
        lineHeight,
        letterSpacing,
        textAlign,
        hasAudio,
        font
    } = props
    const [ playSound ] = useSound(sound, { volume: 1, interrupt: true })
    const [ soundText, setSoundText ] = useState(false)

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(hasAudio && distance < dis && !soundText)
            {
                playSound()
                setSoundText(true)
            } 
            else if(hasAudio && distance > dis && soundText && repeat)
            {
                setSoundText(false)
            }
        }
    })

    return(
        <>
            <Text
                font={ font }
                fontSize={ size }
                maxWidth={ width }
                lineHeight={ lineHeight }
                letterSpacing={ letterSpacing }
                textAlign={ textAlign }
                color={ color }
                rotation-y={ rotationY }
                position={ position }
            >
                { text }
            </Text>
        </>
    )
}

export default function Texts(props)
{
    const { char } = props
    return(
        <>
            <GameText 
                text="Free Teleports For Everyone!"
                font="./assets/fonts/1.otf"
                position={ [ 32, 1, - 66 ] }
                pos={ [ 32, 1, - 66 ] }
                rotationY={ - Math.PI * 0.1 }
                color={ "#9c0909" }
                size={ 1 }
                width={ 4 }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                hasAudio={ true }
                sound={ './assets/audio/teleport-voice.wav' }
                repeat={ true }
                dis={ 18 }
                char={ char }
            />
        </>
    )
}