import React from "react"
import {FooterWrapper, FooterSocialWrapper, FooterSocialIcons} from "../../elements"
import {FaFacebook, FaInstagram, FaLinkedinIn} from "react-icons/fa"

//The footer component which uses the footerwrapper, the socialwrapper and socialicons. 
//Icons imported from font awesome
export const Footer = () => {

    //Returns the footerwrapper with the elements inside as children
    return(

        //The footer wrapper and all its children, with the icons
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <p>Follow me</p>
                    <a href="https://www.facebook.com/abraham.eishow">
                        <FaFacebook size={30} alt="FaceBook logo"/>
                    </a>                    
                    <a href="https://se.linkedin.com/in/abraham-eishow-218b77199">
                        <FaLinkedinIn size={30} alt="Linkedin logo"/>
                    </a>
                    <a href="https://instagram.com/abbe1334">
                        <FaInstagram size={30} alt="Instagram logo"/>
                    </a>

                </FooterSocialIcons>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}