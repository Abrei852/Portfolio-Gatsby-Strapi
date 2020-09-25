import React from "react"
import { CardWrapper, P, H2 } from "../../elements"
import { Button } from "../../components"
import {FaHandPointRight, FaHandPointLeft} from "react-icons/fa"

//The Content component, it takes parameters and displays them in the wrapper
export const ContentCard = ({ date, title, slug, excerpt }) => {

    //Returns the Card wrapper and its children
    return (

        //This will display the data that comes from the parameters
        <CardWrapper>

            <P size="xsmall" weight="bold">
                {date}
            </P>

            <H2 size="medium">
                {title}
            </H2>

            <P size="small" weight="normal" align="center">
                {excerpt}
            </P>
            
            <Button href={slug}> <FaHandPointRight size={14} /> Read More <FaHandPointLeft size={14}/></Button>

        </CardWrapper>
    )
}