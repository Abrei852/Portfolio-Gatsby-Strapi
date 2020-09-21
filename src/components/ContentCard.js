import React from "react"
import { CardWrapper, P, H1 } from "../elements"
import { Button } from "../components"
import {FaHandPointRight, FaHandPointLeft} from "react-icons/fa"


export const ContentCard = ({ date, title, slug, excerpt }) => {
    return (
        <CardWrapper>

            <P size="xsmall" weight="bold">
                {date}
            </P>

            <H1 size="medium">
                {title}
            </H1>

            <P size="small" weight="normal" align="center">
                {excerpt}
            </P>
            
            <Button href={slug}> <FaHandPointRight size={16}/> {title} <FaHandPointLeft size={16}/></Button>

        </CardWrapper>
    )
}