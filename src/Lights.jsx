import { Sky, Environment, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Lights(props)
{
    const { char, downgradedPerformance } = props
    const light = useRef()
    const sky = useRef()

    useFrame(() =>
    {
        if(char.current)
        {
            // Make lights follow the player
            const charPosition = char.current.translation()

            light.current.position.z = charPosition.z + 1 - 4
            light.current.target.position.z = charPosition.z - 4
            
            light.current.position.x = charPosition.x + 1 - 4
            light.current.target.position.x = charPosition.x - 4
            
            light.current.position.y = charPosition.y + 30
            light.current.target.position.y = charPosition.y
            
            light.current.target.updateMatrixWorld()

            // pointRef.current.position.z = charPosition.z + 2
            // pointRef.current.position.x = charPosition.x + 2
            // pointRef.current.position.y = charPosition.y + 2

            // pointRef.current.updateMatrixWorld()
            
            // console.log(pointRef.current.position)
            
            sky.current.position.z = charPosition.z + 1 - 4
            sky.current.position.x = charPosition.x + 1 - 4
            // sky.current.position.y = charPosition.y + 1 - 4
            sky.current.updateMatrixWorld()
        }
    })

    return <>
        
        <Environment
            // preset='sunset' 
            // files="./assets/images/map.hdr"
            files="./assets/images/sunset.hdr"
        />
        <ambientLight 
            intensity={ 0.1 } 
        />
        <directionalLight
            ref={ light }
            castShadow={ !downgradedPerformance }
            // color={ 'blue' }
            position={ [ 1, 8, 1 ] }
            intensity={ 0.5 }
            shadow-camera-near={ 0.1 }
            shadow-camera-far={ 200 }
            shadow-camera-top={ 200 }
            shadow-camera-right={ 200 }
            shadow-camera-bottom={ - 200 }
            shadow-camera-left={ - 200 }
            shadow-bias={ - 0.001 }
            shadow-mapSize-width={ 2048 }
            shadow-mapSize-height={ 2048 }
            // shadow-mapSize={ [ 1024, 1024 ] }
        />
        <Sky
            ref={ sky }
            color={ 'blue' }
            sunPosition={ [ 1, 4, 1 ] }
        />
    </>
}