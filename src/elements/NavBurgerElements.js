import styled from "styled-components"

//Styling for the burger menu
export const NavBurgerWrapper = styled.div `
    width: 2rem;
    height: 2rem;
    display:none;
    z-index: 20;
    overflow: hidden;
    cursor: pointer;

    /*Styling for tablets */
    @media ${props => props.theme.breakpoints.tablet}{
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        margin-left: auto;
    }

    a{
        text-decoration: none;
        color: gray;
        display: flex;
        justify-content: space-between;
    }

`