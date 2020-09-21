import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { NavWrapper } from "../elements"

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
            <Link to="/">
            <img src={data.logo.publicURL} alt="My Logo" />
            </Link>
        </NavWrapper>
    )
}