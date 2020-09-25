import React from "react"
import { ButtonWrapper } from "../../elements"

//The button component which takes children and href as parameter
export const Button = ({ children, href }) => {

    //Returns button wrapper with the href tag as link and the children
    return <ButtonWrapper to={"/" + href}>{children}</ButtonWrapper>
}