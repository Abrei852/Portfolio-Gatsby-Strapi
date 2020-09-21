import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 4 / span 8;
    grid-row: 1 / 2;
    display:flex;
    align-items: center;
    padding: 2rem;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
    }

    a{
        text-decoration: none;
        color: gray;
    }
`