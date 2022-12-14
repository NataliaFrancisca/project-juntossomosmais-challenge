import styled from "styled-components";

export const CardStyle = styled.article`
    align-items: center;
    border: solid #E5E5E5 1px;
    display: flex;
    flex-direction: column;
    min-height: 310px;
    height: auto;
    width: 100%;
    cursor: pointer;
    transition: all ease-in-out .4s;

    &:hover{
        background-color: #E5E5E5;
        transition: all ease-in-out .4s;
    }

    & img{
        border-radius: 50%;
        height: 97px;
        margin-top: 35px;
        width: 97px;
    }

    & h1{
        text-transform: capitalize;
        font-size: 20px;
        font-weight: 700;
        margin: 12px 0 16px 0;
        text-align: center;
        word-wrap: break-word;
    }

    & span{
        font-weight: 400;
    }

    & span.street{
        font-size: 14px;
        text-transform: capitalize;
        word-wrap: break-word;
    }

    & span.address-details{
        font-size: 12px;
        margin-top: 12px;
        text-transform: capitalize;
        word-wrap: break-word;
        text-align: center;
    }

    @media screen and (max-width: 850px){
        h1{
            font-size: 28px;
        }
    }

`