import React from "react"
import {FooterWrapper, FooterSocialWrapper, FooterSocialIcons} from "../../elements"
import {FaFacebook, FaInstagram, FaLinkedinIn} from "react-icons/fa"

export const Footer = () => {
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