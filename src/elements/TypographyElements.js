import styled from "styled-components"

//Styling for the h1 tag
export const H1 = styled.h1`
    color: ${props => props.theme.colors.dark3};
    text-align: center;

    /* Switch statement for font size */
    font-size: ${props => {
        switch(props.size) {

            case "small":
                return props.theme.sizes.small
            
            case "medium":
                return props.theme.sizes.medium
            
            case "large":
                return props.theme.sizes.large
            
            default:
                return props.theme.sizes.large

        }
    }};

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: 1.5rem;
    }
`

//Styling for the h2 tag
export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${props => props.theme.colors.dark3};
  font-weight: 600;
  text-align: center;
  margin: ${props => (props.margin ? props.margin : 0)};
`

//Styling for the p tag
export const P = styled.p`
    padding: 1rem;

    /* Switch statement for font size */
    font-size: ${props => {
        switch(props.size) {

            case "xsmall":
                return props.theme.sizes.xsmall
            
            case "small":
                return props.theme.sizes.small
            
            case "medium":
                return props.theme.sizes.medium
            
            case "large":
                return props.theme.sizes.large
            
            default:
                return "2rem"

        }
    }};

    /* Switch statement for line height */
    line-height: ${props => {
        switch(props.height){

            case "small":
                return props.theme.heights.small
            
            case "medium":
                return props.theme.heights.medium
            
            case "large":
                return props.theme.heights.large
            
            default:
                return props.theme.heights.medium

        }
    }};
    
    /* Switch statement for font weight */
    font-weight: ${props => {
        switch(props.weight) {

            case "normal":
                return props.theme.weights.normal
            
            case "bold":
                return props.theme.weights.bold
            
            default:
                return props.theme.weights.normal

        }
    }};

    /* Switch statement for text align */
    text-align: ${props => {
        switch(props.align) {

            case "left":
                return props.theme.align.left
            
            case "center":
                return props.theme.align.center
            
            default:
                return props.theme.align.left

        }
    }};

`


//Styling for the article tag
export const Article = styled.article`
    text-align: ${props => props.theme.align.center};

    /* Switch statement for line height */
    line-height: ${props => {
        switch(props.height){

            case "small":
                return props.theme.heights.small
            
            case "medium":
                return props.theme.heights.medium
            
            case "large":
                return props.theme.heights.large
            
            default:
                return props.theme.heights.medium

        }
    }};
`


