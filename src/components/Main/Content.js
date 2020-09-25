import React from "react"
import { ContentWrapper } from "../../elements"

//The Content component which has children as a parameter
export const Content = ({children}) => {

    //Returns the content wrapper and its children.
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    )
}
