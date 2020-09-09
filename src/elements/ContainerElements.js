import styled from "styled-components"

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 10rem)) 1fr;
    grid-template-rows: 7.8rem 5rem 5rem auto; /* antalet rader (4) och dess storlek */
    gap: 0 1rem;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-grid-template-columns: 1rem repeat(6 1fr) 1rem;
    }

`