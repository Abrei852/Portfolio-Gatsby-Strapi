import styled from "styled-components"

//Styling for the container
export const ContainerWrapper = styled.div`

    display: grid;
    height: 100%;
    grid-template-columns: 1fr repeat(12, minmax(auto, 5rem)) 1fr;
    grid-template-rows: 7.8rem 20rem 5rem auto; /* antalet rader (4) och dess storlek */
    gap: 2rem;
    background-color: white;

    /*Breakpoint for tablet, it changes the total columns */
    @media ${props => props.theme.breakpoints.tablet}{
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-template-columns: 1rem repeat(6 1fr) 1rem;
        gap: 1.5rem;
    }

`