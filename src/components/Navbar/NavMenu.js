import React from "react"
import { NavListWrapper } from "../../elements"

export const NavMenu = ({open}) => {

    return(
        <NavListWrapper open={open}>
            <ul>

                <li>
                    <a href="/#">Home</a>
                </li>

                <li>
                    <a href="/#">About me</a>
                </li>

                <li>
                    <a href="/#">Links</a>
                </li>

                <li>
                    <a href="/#">Projects</a>
                </li>

            </ul>
        </NavListWrapper>
    )
}