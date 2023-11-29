import { Text } from "@react-three/drei"

const GameText = (props) => 
{
    const { text, color, size, width, position, rotationY } = props

    return(
        <>
            <Text
                font="./assets/fonts/pixelify/PixelifySans.ttf"
                fontSize={ size }
                maxWidth={ width }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                color={ color }
                rotation-y={ rotationY }
                position={ position}
            >
                { text }
            </Text>
        </>
    )
}

export default function Texts()
{
    return(
        <>
            <GameText 
                text="Collect them coinz!" 
                position={ [ - 3.8, 3.5, 7.6 ] }
                rotationY={ Math.PI * 0.9 }
                color={ "white" }
                size={ 1 }
                width={ 4 }
            />

            {/* <GameText 
                text="To the bar!" 
                position={ [ 47.85, 3.5, 0 ] }
                rotationY={ Math.PI * 1.5 }
                color={ "white" }
                size={ 0.8 }
                width={ 6 }
            />

            <GameText 
                text="Shuttle Bay" 
                position={ [ 141, 3.5, 151 ] }
                rotationY={ Math.PI * 1 }
                color={ "white" }
                size={ 0.8 }
                width={ 6 }
            /> */}
        </>
    )
}