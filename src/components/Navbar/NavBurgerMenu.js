import React, {useState} from "react"
import { NavBurgerWrapper } from "../../elements"
import { NavMenu } from "../../components"
import {FaBars} from "react-icons/fa"

//The component for the burger menu
export const BurgerMenu = () => {

    //Creates one const and one boolean to check if the icon is clicked
    const [open, setOpen] = useState(false)

    //Returns the wrapper and sends in the cons and boolean to check value.
    return(
    <>
        <NavBurgerWrapper open = {open} onClick = {() => setOpen(!open)}>
            <FaBars size={30}/>
        </NavBurgerWrapper> 

        <NavMenu open={open}/>
    </>
    )
}