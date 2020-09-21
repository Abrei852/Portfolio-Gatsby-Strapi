import React from "react"
import { Link } from "gatsby"
import { NavWrapper } from "../elements"
import { FaBars } from 'react-icons/fa'


export const Nav = () => {

    return (
        <NavWrapper>
            <Link to="/">
                <FaBars size={30}/>
            </Link>
        </NavWrapper>
    )
}