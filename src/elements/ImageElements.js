import styled from "styled-components"

//Styling for the featureimage
export const FeatureImageWrapper = styled.div`
  grid-column: 2 / span 12;
  grid-row: 2 / 3;
  overflow: hidden;
  position: relative;
  padding: 2rem;

  /*Breakpoint for tablets */
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
      grid-columns: 3 / span 8;
  }
`