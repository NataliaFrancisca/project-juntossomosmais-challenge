import styled from "styled-components";

export const FilterStyle = styled.aside`
    border: solid 1px #E5E5E5;
    margin-right: 16px;
    height: 474px;
    padding: 24px 0 14px 27px;
   
    & form{
        display: flex;
        flex-direction: column;
    }

    & legend{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 6px;
    }

    & input{
        border: 4px solid #4A4A4A;
        border-radius: 4px;
        height: 24px;
        margin-right: 8px;
        width: 24px;
    }

    & label{
        align-items: center;
        display: flex;
        font-size: 16px;
        margin-top: 8px;
        cursor: pointer;
        word-break: break-all;
    }

    & a{
        color: #222D39;
        font-size: 16px;
        margin-top: 10px;
    }

    @media screen and (max-width: 800px){
        margin-right: 0;
        height: auto;
        margin: 16px 0;
    }
`