import World from './World.jsx'
import Lights from '../Lights.jsx'
import Player from './Player.jsx'
import Effects from './Effects.jsx'
import { useRef } from 'react'
import Texts from './world/Texts.jsx'

export default function Experience({ downgradedPerformance = false })
{
    const ref = useRef()
    // console.log(downgradedPerformance)

    return(
    <>
        <Player ref={ ref } />
        <World char={ ref } />
        <Lights 
            char={ ref }
            downgradedPerformance={ downgradedPerformance } 
        />
        {/* <Texts /> */}
        { !downgradedPerformance && (
          // disable the postprocessing on low-end devices
            <Effects />
        )}
    </>
    )
}