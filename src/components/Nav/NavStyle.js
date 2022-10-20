import styled from "styled-components";

export const NavStyle = styled.nav`
    background-color: #F5F5F5;
    height: 96px;
    padding: 28px 156px;
    width: 100%;

    display: grid;
    grid-template-columns: 20% 50% 20%;
    justify-content: space-around;

    & #search-bar{
        align-items: center;
        background-color: #FFFFFF;
        border-radius: 32px;
        display: flex;
        margin: 0 140px;
        padding: 15px 19px;
        width: 100%;

        img{
            margin-right: 13.5px;
        }

        input{
            width: 90%;
            outline: none;
            font-size: 16px;
        }

        @media screen and (max-width: 550px){
            margin: 0;
        }
    }

    @media screen and (max-width: 550px){
        grid-template-columns: 30% 60%;
        padding: 28px 20px;
    }

`