import styled from "styled-components"

export const FooterWrapper = styled.footer `
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: ${props => props.theme.colors.main1};

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 1 / span 8;
        
    }`

    export const FooterSocialWrapper = styled.div `
        display: flex;
        flex-wrap: wrap;
        margin: auto;
    `
    export const FooterSocialIcons = styled.div `

    a{
        height: 25px;
        transition: filter 0.1s ease;
        padding: 0 1rem;
        color: white;

    }
    a:hover{
        filter: brightness(40%)
    }

    p{
        color: white;
        font-size: 1.3rem;
        text-align: center;
        padding: 1rem;
    }

`