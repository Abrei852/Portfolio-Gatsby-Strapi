import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-column: 2 / span 12;
  grid-row: 2 / 3;
  overflow: hidden;
  position: relative;
  padding: 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
      grid-columns: 3 / span 8;
  }
`