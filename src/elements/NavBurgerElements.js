import styled from "styled-components"

export const NavBurgerWrapper = styled.div `
    width: 2rem;
    height: 2rem;
    position: fixed;
    right: 56px;
    display:none;
    width: 2rem;
    height: 0,25rem;
    z-index: 20;

    @media ${props => props.theme.breakpoints.mobile}{
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    a{
        text-decoration: none;
        color: gray;
        display: flex;
        justify-content: space-between;
    }
`