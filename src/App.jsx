import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { Physics } from '@react-three/rapier'
import { KeyboardControls, Loader, PointerLockControls, Preload, PerformanceMonitor } from '@react-three/drei'
import { EcctrlJoystick } from 'ecctrl'
import { isMobile, isDesktop } from 'react-device-detect'
import Interface from './components/Interface.jsx'
import { Perf } from 'r3f-perf'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import MobileInterface from './components/MobileInterface.jsx'
import { BoxGeometry, CylinderGeometry, Euler, MeshBasicMaterial, SphereGeometry, Vector3 } from 'three'

export default function App()
{
    const [ downgradedPerformance, setDowngradedPerformance ] = useState(false)
    const [ started, setStarted ] = useState(false)

    // Joystick controller materials
    const cylinderGeometry = useMemo(() => new CylinderGeometry(2.3, 2.1, 0.3, 32, 1), [])
    const sphereGeometry = useMemo(() => new SphereGeometry(1.4, 32, 8), [])
    const boxGeometry = useMemo(() => new BoxGeometry(1, 1, 1), [])
    const activeMaterial = useMemo(() => new MeshBasicMaterial({ color: 0xffffff, wireframe: false }), [])
    const passiveMaterial = useMemo(() => new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 }), [])

    // const [ paused, setPaused ] = useState(false)
    // useEffect(() => 
    // {
    //     document.addEventListener("visibilitychange", () => 
    //     {      
    //         setPaused(true)
    //     })
    //     return() =>
    //     {
    //         document.removeEventListener("visibilitychange", () => {} )
    //     }
    // }, [])

    const keyboardMap = 
    [
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
        { name: "run", keys: ["Shift"] },
        // Optional animation key map
        { name: "action1", keys: ["1"] },
        { name: "action2", keys: ["2"] },
        { name: "action3", keys: ["3"] },
        { name: "action4", keys: ["4"] },
    ]

    return( 
    <>
        { !started && (
            <LoadingScreen 
                started={ started } 
                setStarted={ setStarted }
            />
        ) }
        { isMobile && started && (
            <EcctrlJoystick 
                joystickBaseProps={{
                    geometry: cylinderGeometry,
                    material: passiveMaterial
                }}
                joystickStickProps={{
                    material: passiveMaterial
                }}
                joystickHandleProps={{
                    geometry: sphereGeometry,
                    rotation: new Euler(Math.PI * 0.5, 0, 0),
                    material: activeMaterial
                }}
                buttonLargeBaseProps={{
                    scale: new Vector3(3.5, 3.5, 3.5),
                    geometry: boxGeometry,
                    material: passiveMaterial
                }}
            />
        ) }
        <KeyboardControls map={ keyboardMap }>
            <Canvas
                shadows
                camera={ { far: 1000, near: 0.1 } }
                dpr={ [ 1, 1.5 ] }
                // onClick={() => setPaused(false)}
                // style={{ background: 'black' }}
            >
                    <fog attach="fog" args={["#87CEEB", 10, 600]} />
                    <Physics
                        // debug
                        timeStep="vary"
                        // paused={ paused }
                        gravity={ [ 0, - 9.81, 0 ] }
                        >
                        <PerformanceMonitor
                            onDecline={(fps) => 
                            {
                                setDowngradedPerformance(true)
                            }}
                        />
                        <Suspense>
                            { started && (
                                <>
                                    <Experience
                                        downgradedPerformance={ downgradedPerformance } 
                                    />
                                    <Preload all />
                                </>
                            )}
                        </Suspense>
                    </Physics>
                { isDesktop && started && (
                    <>
                        <PointerLockControls />
                        {/* <Perf /> */}
                    </>
                )}
            </Canvas>
            { isDesktop && started && (
                <Interface />
            ) }
            { isMobile && started && (
                <MobileInterface />
            )}
        </KeyboardControls>
    </> )
}