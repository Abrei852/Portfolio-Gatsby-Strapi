import React from "react"
import {ContainerWrapper} from "../../elements"
import { Nav, Footer} from "../../components"

//The Container component which takes children as parameter
export const Container = ({children}) => {

    //Returns the Container wrapper with the Nav and Footer components and the children
    return(

        //The Container wrapper is used here to fit the Nav and footer component.
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper>
    )
}
