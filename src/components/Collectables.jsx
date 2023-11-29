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
    const { nodes, materials } = useGLTF("./assets/models/coin.glb")

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
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Coin_1.geometry}
                    material={materials.Yellow}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Coin_2.geometry}
                    material={materials.DarkYellow}
                    />
                </group>
            </group>
        </>
    )
}

export function totalCoinAmount()
{
    return totalCoinAmount = 7
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


    return(
    <>
        <Coin position={ [ - 8.5, 4.5, 28 ] } pos={ [ - 8.5, 4.5, 28 ] } scale={ 2 } char={ char } coin={ coin1 } />
        <Coin position={ [ 9.3, 4.5, 18 ] } pos={ [ 9.3, 4.5, 18 ] } scale={ 2 } char={ char } coin={ coin2 } />
        <Coin position={ [ - 12, 7, 58 ] } pos={ [ - 12, 7, 58 ] } scale={ 2 } char={ char } coin={ coin3 } />
        <Coin position={ [ - 52, 9, 51 ] } pos={ [ - 52, 9, 51 ] } scale={ 2 } char={ char } coin={ coin4 } />
        {/* Stone platform */}
        <Coin position={ [ - 150, 14, 61 ] } pos={ [ - 150, 14, 61 ] } scale={ 2 } char={ char } coin={ coin5 } />
        <Coin position={ [ - 149, 5, 8 ] } pos={ [ - 149, 5, 8 ] } scale={ 2 } char={ char } coin={ coin7 } />
        {/* Boat coin */}
        <Coin position={ [ 78, - 19, 5.1 ] } pos={ [ 78, - 18, 5.1 ] } scale={ 2.5 } char={ char } coin={ coin6 } />
    </>
    )
}

useGLTF.preload("./assets/models/coin.glb")