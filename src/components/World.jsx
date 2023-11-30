import { Ground } from "./Ground"
import Platforms from "./world/Platforms"
import Collectables from "./Collectables"
import Environment from "./world/Environment"
import NPCs from "./world/NPCs"
import Structures from "./world/Structures"
import Trees from "./world/Trees"
import Teleports from "./world/Teleports"

export default function World(props)
{
    const { char } = props

    return(
    <>
        <group>
            <Platforms />
            <Collectables char={ char } />
            <NPCs char={ char } />
            <Trees />
            <Teleports char={ char } />
            <Structures char={ char } />
            {/* <Texts /> */}
            <Ground />
            <Environment />
        </group>
    </>
    )
}