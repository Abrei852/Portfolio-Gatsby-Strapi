import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {FooterWrapper, FooterSocialWrapper, FooterSocialIcons} from "../../elements"
import {FaFacebook, FaInstagram, FaLinkedinIn} from "react-icons/fa"

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
                    <p>Follow me</p>
                    <a href="https://facebook.com">
                        <FaFacebook size={30} alt="FaceBook logo"/>
                    </a>                    
                    <a href="https://se.linkedin.com">
                        <FaLinkedinIn size={30} alt="Linkedin logo"/>
                    </a>
                    <a href="https://instagram.com">
                        <FaInstagram size={30} alt="Instagram logo"/>
                    </a>

                </FooterSocialIcons>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}