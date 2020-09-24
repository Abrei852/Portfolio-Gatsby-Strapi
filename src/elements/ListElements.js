import styled from "styled-components"

export const Ul = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    list-style: none;

    @media ${props => props.theme.breakpoints.tablet}{
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
`

export const Li = styled.li`
    padding: 20px 2rem;
`

