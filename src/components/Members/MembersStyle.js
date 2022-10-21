import styled from "styled-components";

export const MembersStyle = styled.main`

    & menu{
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: solid #E5E5E5 1px;

        & span{
            font-size: 16px;
            font-weight: 400;
            margin: 16px;
        }
    }

    & form{
        margin: 18px 26px;
    }

    & label{
        font-size: 16px;
        font-weight: 500;
    }

    & select{
        margin-left: 6px;
        background-color: transparent;
        outline: none;
    }


    & section.list-cards-members{
        border: solid #E5E5E5 1px;
        padding: 10px;
        margin: 16px 0 40px 0;
    }
`