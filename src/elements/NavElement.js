import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 3 / span 10;
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

    img {
        height: 35px;
    }
`