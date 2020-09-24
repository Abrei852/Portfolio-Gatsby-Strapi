import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { NavWrapper } from "../elements"
import { BurgerMenu } from "../components"

export const Nav = () => {

    const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

    return (
        <NavWrapper>
            <Link>
            <a href="/"><img src={data.logo.publicURL} alt="My Logo"/></a>
            <BurgerMenu />
            </Link>
        </NavWrapper>
    )
}