import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    padding: 2.5rem 0;
    border-bottom: 1px solid silver;

    img {
        height: 40px;
        
    }

    a{
        text-decoration: none;
        color: gray;
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        font-size: 1.4rem;
    }

    li:hover{
        background-color: ${props => props.theme.colors.main1};
        a{
            color: white;
        }
    }

    @media ${props => props.theme.breakpoints.tablet}{

        grid-column: 1 / span 8;

        img{
            height: 35px;
        }

        a{
            width: 83%;
            margin: auto;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1 / span 8;


    }
`