import styled from "styled-components"

export const ContentWrapper = styled.main`
    grid-column: 2 / span 12;
    grid-row: 4 / span 6;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1 / span 8;
    }
`