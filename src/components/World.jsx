import { Ground } from "./Ground"
import Environment from "./world/Environment"
import Platforms from "./world/Platforms"
// import Structures from "./world/Structures"
// import Trees from "./world/Trees"
// import Collectables from "./Collectables"
// import Teleports from "./world/Teleports"

export default function World(props)
{
    const { char } = props

    return(
    <>
        <group>
            <Platforms />
            {/* <Collectables char={ char } /> */}
            {/* <Trees /> */}
            {/* <Teleports char={ char } /> */}
            <Ground />
            {/* <Structures char={ char } /> */}
            {/* <Texts /> */}
            <Environment />
        </group>
    </>
    )
}