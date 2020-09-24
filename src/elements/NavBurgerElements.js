import styled from "styled-components"

export const NavBurgerWrapper = styled.div `
    width: 2rem;
    height: 2rem;
    position: fixed;
    display:none;
    z-index: 20;
    overflow: hidden;
    cursor: pointer;

    @media ${props => props.theme.breakpoints.tablet}{
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        right: 63px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        right: 56px;
    }

    a{
        text-decoration: none;
        color: gray;
        display: flex;
        justify-content: space-between;
    }

`