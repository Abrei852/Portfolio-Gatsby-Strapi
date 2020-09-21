import styled from "styled-components"

export const FooterWrapper = styled.footer `
    grid-column: 2 / span 12;
    grid-row: 9;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
    }`

    export const FooterSocialWrapper = styled.div `
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
        margin: auto;
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