import styled from "styled-components"

//Styling for the navigation
export const NavWrapper = styled.nav`
    grid-column: 1 / span 14;
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
        margin-left: 20px;
    }

    li{
        cursor: pointer;
    }

    li:hover{
        background-color: ${props => props.theme.colors.main1};
        a{
            color: white;
        }
    }

    /*Breakpoint for tablets */
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
`