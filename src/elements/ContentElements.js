import styled from "styled-components"

export const ContentWrapper = styled.main`
    grid-column: 4 / span 8;
    grid-row: 3 / span 5;
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 2;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`