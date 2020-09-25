import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { NavWrapper } from "../../elements"
import { BurgerMenu } from "../../components"


//The component for the Navigation
export const Nav = () => {

    //Query that returns the logo image
    const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

    //Returns the wrapper and its children.
    //The burger menu for smaller screens.
    return (
        <NavWrapper>
            <Link>
            <a href="/"><img src={data.logo.publicURL} alt="My Logo"/></a>
            <BurgerMenu />
            </Link>
        </NavWrapper>
    )
}