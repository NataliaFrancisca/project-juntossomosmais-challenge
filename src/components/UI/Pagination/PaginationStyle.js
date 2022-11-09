import styled from "styled-components";

export const PaginationStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & section.list-cards-members{
        margin: 16px 0 40px 0;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(272px, auto));
        gap: 16px;
    }

    & .paginationBttns{
        display: flex;
        align-items: baseline;
        justify-content: center;
   
        & li{
            list-style: none;
            margin-right: 24px;
            text-align: center;
            cursor: pointer;

            font-size: 16px;
            font-weight: 400;
            color: #9B9B9B;
            transition: all .8s ease-in;
        }

        & li.paginationActive{
            font-weight: 700;
            transition: all .4s ease-in-out;
        }

        & li.paginationActive:after{
            content: "";
            width: 32px;
            height: 4px;
            background-color: grey;
            border-radius: 9px;
            display: block;
            transition: all .8s ease-in-out;
        }

        & li.previous,
        li.next{
            width: 32px;
            height: 32px;
            background-color: #4A4A4A;
            border-radius: 50%;
            font-weight: 700;
            color: #FFFFFF;
           
            & a{
                width: 100%;
                height: 100%;

                display: flex;
                align-items: center;
                justify-content: center;
            }

           
        }

        & li.next.disabled,
        li.previous.disabled{
            background-color: grey;
            cursor: not-allowed;
        }

        & li.next{
            margin-right: 0px;
        }
        
   
    }

    
`