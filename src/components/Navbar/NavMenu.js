import React from "react"
import { NavListWrapper } from "../../elements"

//The component for the Navmenu and the data of open
export const NavMenu = ({open}) => {

    //Returns the wrapper and the defined elements within as children
    //Sends the data received from the open parameter to the wrapper.
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