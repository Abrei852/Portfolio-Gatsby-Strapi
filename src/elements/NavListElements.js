import styled from "styled-components"

export const NavListWrapper = styled.div `
    grid-column: 2 / span 12;
    grid-row: 3;

    a{
        text-decoration: none;
        font-size: 1.4rem;
    }

    li:hover{
        background-color: ${props => props.theme.colors.main1};
        a{
            color: white;
        }
    }

    @media ${props => props.theme.breakpoints.tablet} {
        a{
            font-size: 1.2rem;
        }
    }
`