import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import useGame from '../stores/useGame.jsx'
import { Vector3 } from "three"
import useSound from "use-sound"

const Coin = (props) => 
{
    const [ playCoinSound ] = useSound('./assets/audio/coin.wav')
    const { coin } = props
    const [ collected, setCollected ] = useState(false)
    const coins = useGame()
    const { char, pos } = props
    const { nodes, materials } = useGLTF("./assets/models/cane.glb")

    useFrame((_, delta) =>
    {
        // Item rotate
        coin.current.rotation.y += delta

        if(char.current)
        {
            const coinPosition = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = coinPosition.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            // console.log( distance)

            if(distance < 3 && !collected)
            {
                coins.increaseCoins()
                playCoinSound()
                setCollected(true)
                // console.log(coins.coins)
                coin.current.visible = false
            }
        }
    })

    return(
        <>
            <group ref={coin} {...props} dispose={null}>
                <group scale={ 0.02 }>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Candy_Cane.geometry}
                        material={materials.Mat}
                    />
                </group>
            </group>
        </>
    )
}

export function totalCoinAmount()
{
    return totalCoinAmount = 13
}

export default function Collectables(props)
{
    const { char } = props
    const coin1  = useRef()
    const coin2  = useRef()
    const coin3  = useRef()
    const coin4  = useRef()
    const coin5  = useRef()
    const coin6  = useRef()
    const coin7  = useRef()
    const coin8  = useRef()
    const coin9  = useRef()
    const coin10  = useRef()
    const coin11  = useRef()
    const coin12  = useRef()
    const coin13  = useRef()

    return(
    <>
        <Coin position={ [ 44, 9, - 13 ] } pos={ [ 44, 9, - 13 ] } scale={ 2 } char={ char } coin={ coin1 } />
        <Coin position={ [ 63, 17, - 11 ] } pos={ [ 63, 17, - 11 ] } scale={ 2 } char={ char } coin={ coin2 } />
        <Coin position={ [ 58, 30, 26 ] } pos={ [ 58, 30, 26 ] } scale={ 2 } char={ char } coin={ coin3 } />
        <Coin position={ [ 46, 40, 59 ] } pos={ [ 46, 40, 59 ] } scale={ 2 } char={ char } coin={ coin4 } />
        <Coin position={ [ - 10, 49, 65 ] } pos={ [ - 10, 49, 65 ] } scale={ 2 } char={ char } coin={ coin5 } />
        <Coin position={ [ - 61, 2, 21 ] } pos={ [ - 61, 2, 21 ] } scale={ 2 } char={ char } coin={ coin7 } />
        <Coin position={ [ - 46, - 6, - 77 ] } pos={ [ - 46, - 6, - 77 ] } scale={ 2.5 } char={ char } coin={ coin6 } />
        <Coin position={ [ 53, 21, - 37 ] } pos={ [ 53, 21, - 37 ] } scale={ 2 } char={ char } coin={ coin8 } />
        {/* Igloo coin */}
        <Coin position={ [ - 3, - 4.8, - 68.5 ] } pos={ [ - 3, - 4.8, - 68.5 ] } scale={ 2 } char={ char } coin={ coin9 } />
        {/* Second island */}
        <Coin position={ [ - 481, 24, - 149 ] } pos={ [ - 481, 24, - 149 ] } scale={ 2 } char={ char } coin={ coin10 } />
        <Coin position={ [ - 718, 30, - 88 ] } pos={ [ - 718, 30, - 88 ] } scale={ 2 } char={ char } coin={ coin11 } />
        <Coin position={ [ - 802, 42, - 126 ] } pos={ [ - 802, 42, - 126 ] } scale={ 2 } char={ char } coin={ coin12 } />
        <Coin position={ [ - 820, 56, - 152 ] } pos={ [ - 820, 56, - 152 ] } scale={ 2 } char={ char } coin={ coin13 } />
    </>
    )
}



useGLTF.preload("./assets/models/cane.glb")