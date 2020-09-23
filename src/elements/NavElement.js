import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;

    img {
        height: 45px;
    }

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
        img{
            height: 30px;
        }
        
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1 / span 8;
        margin: auto;
    }

    a{
        text-decoration: none;
        color: gray;
    }

`