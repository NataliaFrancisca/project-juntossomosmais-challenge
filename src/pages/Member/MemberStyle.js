import styled from "styled-components";

export const MemberStyle = styled.section`
    width: 100%;
    min-height: 100vh;
    height: auto;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    & header, main{
        display: flex;
        padding: 10px;
        background-color: #F5F5F5;
        width: 60%;
        margin-bottom: 10px;
    }

    & header{
        align-items: center;

        & img{
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background: linear-gradient(to right, blue, green, orange, red);
            padding: 2px;
            object-fit: contain;
        }

        & div.details-header{
            display: flex;
            flex-direction: column;
            padding: 0 10px;

            & h1{
                font-size: 32px;
                text-transform: capitalize;
            }
        }
    }


    & main{
        display: flex;
        flex-direction: column;
        padding: 20px;

        & label{
            font-weight: bold;
            margin-top: 10px;
        }

        & span, li{
            text-transform: capitalize;
        }

        & li{
            margin: 4px 0 4px 20px;
        }

        & li > span{
            margin-left: 4px;
        }

        & span.lowercase-label{
            text-transform: lowercase;
        }
    }
       


       

  
`