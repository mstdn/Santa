import { forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { Santa } from './Santa'

const Player = forwardRef((props, ref) =>
{
    useFrame(() =>
    {
        if(ref.current)
        {
            const charPosition = ref.current.translation()
            // console.log(charPosition)
            
            if(charPosition.y < - 30 )
            {
                // console.log(charPosition.y)
                ref.current.setTranslation( { x: 0, y: 15, z: 0 } )
                ref.current.setLinvel( { x: 0, y: 0, z: 0 } )
                ref.current.setAngvel( { x: 0, y: 0, z: 0 } )

            }
        }
    })
    
    const characterURL = "./assets/models/santa.glb"
    const animationSet = 
    {
        idle: "Idle",
        walk: "Walk",
        run: "Run",
        jump: "Jump",
        jumpIdle: "Falling",
        jumpLand: "Landing",
        fall: "Falling",
        action1: "1",
        action2: "2",
        action3: "3",
        action4: "4",
    }

    return( 
        <>
            <Ecctrl
                ref={ ref }
                capsuleRadius={ 0.3 }
                capsuleHalfHeight={ 0.5 }
                friction={ 1 }
                camInitDis={ - 12 }
                camMaxDis={ - 30 }
                camMinDis={ - 0.1 }
                animated={ true }
                position={ [ 0, 20, 0 ] }
                maxVelLimit={ 3 }
                sprintMult={ 3 }
                jumpVel={ 8 }
                // turnSpeed={ 10 }
                // jumpForceToGroundMult={ 10 }
                gravityScale={ 1 }
                autoBalanceDampingOnY={ 0.01 }
                
                // characterInitDir={ 160 }
                // camInitDir={ Math.PI * 1 }
            >
                <EcctrlAnimation
                    characterURL={ characterURL }
                    animationSet={ animationSet }
                >
                    <Santa
                        position={ [ 0,  - 1, 0 ] }
                    />
                </EcctrlAnimation>
            </Ecctrl>
        </>
    )
})

export default Player