import styled from "styled-components"

//Styling for the list elements in the navigation
export const NavListWrapper = styled.div `

    ul{
        display: flex;
        flex-flow: row nowrap;
        list-style: none;
    }

    li{
        padding: 20px 2rem;
    }

    /*Breakpoint for tablets makes it suitible for burger styled menu*/
    @media ${props => props.theme.breakpoints.tablet}{
        ul{
            flex-flow: column nowrap;
            margin: 0;
            position: fixed;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            transition: transform 0.3s;
            top: 0;
            right: 0;
            height: 100vh;
            z-index: 10;
            background-color: white;
            padding-top: 6rem;
        }
    }
`