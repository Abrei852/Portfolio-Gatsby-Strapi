import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {FooterWrapper, FooterSocialWrapper, FooterSocialIcons} from "../elements"

export const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        facebook: file(relativePath: {eq: "facebook.svg"}) {
          publicURL
        }
        linkedin: file(relativePath: {eq: "linkedin.svg"}) {
          publicURL
          }
        instagram: file(relativePath: {eq: "instagram.svg"}) {
          publicURL
        }
      }
    `)
    return(
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://facebook.com">
                        <img src={data.facebook.publicURL} alt="Facebook logo" />
                    </a>                    
                    <a href="https://se.linkedin.com">
                        <img src={data.linkedin.publicURL} alt="Linkedin logo" />
                    </a>
                    <a href="https://instagram.com">
                        <img src={data.instagram.publicURL} alt="Instagram logo" />
                    </a>
                </FooterSocialIcons>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}