import React from "react"
import { Ul, Li,  NavListWrapper} from "../elements"

export const NavMenu = () => {

    return(
        <NavListWrapper>
            <Ul>

                <Li>
                    <a href="#">Home</a>
                </Li>

                <Li>
                    <a href="#">About me</a>
                </Li>

                <Li>
                    <a href="#">Links</a>
                </Li>

                <Li>
                    <a href="#">Projects</a>
                </Li>

            </Ul>
        </NavListWrapper>
    )
}