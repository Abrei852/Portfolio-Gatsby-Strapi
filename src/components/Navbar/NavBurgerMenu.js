import React, {useState} from "react"
import { NavBurgerWrapper } from "../../elements"
import { NavMenu } from "../../components"
import {FaBars} from "react-icons/fa"


export const BurgerMenu = () => {

    const [open, setOpen] = useState(false)

    return(
    <>
        <NavBurgerWrapper open = {open} onClick = {() => setOpen(!open)}>
            <FaBars size={30}/>
        </NavBurgerWrapper> 

        <NavMenu open={open}/>
    </>
    )
}