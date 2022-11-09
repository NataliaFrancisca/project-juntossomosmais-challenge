import styled from "styled-components";

export const HeaderStyle = styled.header`
    padding: 24px 152px;

    & h1{
        font-size: 32px;
        font-weight: 700;
        margin: 24px 0 40px 0;
    }

    & span.pagination{
        padding-left: 4px;
    }

    & section.container-grid-header{
        display: grid;
        grid-template-columns: 30% 70%;
        justify-content: space-between;
    }

    @media screen and (max-width: 980px){
        padding: 24px 120px;
    }

    @media screen and (max-width: 800px){
        padding: 24px 100px;

        & section.container-grid-header{
            grid-template-columns: 100%;
        }
    }

    @media screen and (max-width: 680px){
        padding: 24px 20px;
    }


`