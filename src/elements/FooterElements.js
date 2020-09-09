import styled from "styled-components"

export const FooterWrapper = styled.footer `
    grid-column: 2 / span 11;
    min-height: 5rem 0;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: blue;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
    }


`