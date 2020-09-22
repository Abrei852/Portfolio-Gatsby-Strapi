import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    display:flex;
    align-items: center;
    
    padding: 2rem;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
        
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1 / span 8;
        margin: auto;
    }

    a{
        text-decoration: none;
        color: gray;
    }

    img {
        height: 40px;
    }
`