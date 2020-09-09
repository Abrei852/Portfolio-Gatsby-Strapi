import styled from "styled-components"

export const FooterWrapper = styled.footer `
    grid-column: 2 / span 11;
    min-height: 5rem 0;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: blue;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
    }`

    export const FooterSocialWrapper = styled.div `
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
    `
    export const FooterSocialIcons = styled.div `

    img{
        height: 25px;
        transition: filter 0.2s ease;
        padding: 0 1rem;
    }
    img:hover{
        filter: brightness(20%)
    }

`