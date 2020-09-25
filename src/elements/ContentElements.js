import styled from "styled-components"

//Styling for the contentwrapper
export const ContentWrapper = styled.main`
    grid-column: 2 / span 12;
    grid-row: 3 / span 6;
    
    /*Breakpoint for tablets */
    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1 / span 8;
    }
`