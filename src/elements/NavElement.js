import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 5 / span 5;
    grid-row: 1;
    display:flex;
    align-items: center;
    background-color: purple;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
    }

    a{
        text-decoration: none;
        color: white;
    }
`