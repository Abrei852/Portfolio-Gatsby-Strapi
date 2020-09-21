import styled from "styled-components"

export const P = styled.p`

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

    text-align: ${props => {
        switch(props.align){

            case "left":
                return props.theme.align.left
            
            case "center":
                return props.theme.align.center
            
            default:
                return props.theme.align.left
        }
    }};

    padding: 1rem;
`
export const H1 = styled.h1`
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
    color: ${props => props.theme.colors.dark3};
    text-align: center;
`
export const Article = styled.article`
    text-align: ${props => props.theme.align.center};
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

