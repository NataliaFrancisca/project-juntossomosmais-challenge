import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: #3A3A3A;
    height: 296px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & img.logo-footer{
        height: 48px;
        margin: 32px 0 24px 0;
    }

    & p{
        text-align: center;
        font-weight: 500;
        color: #FFFFFF;
        font-size: 16px;
    }

    & span{
        text-align: center;
        font-weight: 400;
        color: #FFFFFF;
        font-size: 14px;
        margin: 24px 0 20px 0;
    }

    & a{
        transition: all ease-in-out .4s;

        &:nth-child(n+2){
            margin-left: 16px;
        }

        &:hover{
            filter: brightness(80%);
            transition: all ease-in-out .4s;
        }
    }

 
    
`