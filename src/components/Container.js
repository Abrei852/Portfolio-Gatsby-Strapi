import React from "react"
import {ContainerWrapper} from "../elements"
import {Nav, Footer} from "../components"

export const Container = ({children}) => {
    return(
        <ContainerWrapper>
            <h1>ERA</h1>
            <Nav />
            <Footer />
        </ContainerWrapper>
    )
}