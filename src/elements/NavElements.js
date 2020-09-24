import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    padding: 3rem 0;

    img {
        height: 40px;
        margin: auto 0;
    }

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
        img{
            height: 35px;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 2 / span 6;
        justify-content: end;
        img{
            height: 30px;
            margin: 0;
        }
    }

    a{
        text-decoration: none;
        color: gray;
        display: flex;
        justify-content: space-between;
    }

`