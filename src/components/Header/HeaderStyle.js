import styled from "styled-components";

export const HeaderStyle = styled.header`
    padding: 24px 152px;

    span.pagination{
        padding-left: 4px;
    }

    h1{
        font-size: 32px;
        font-weight: 700;
        margin: 24px 0 40px 0;
    }

    section.container-grid-header{
        display: grid;
        grid-template-columns: 30% 70%;

        justify-content: space-between;
    }

    #container-members{
        background-color: blue;
        padding: 10px;
    }
`