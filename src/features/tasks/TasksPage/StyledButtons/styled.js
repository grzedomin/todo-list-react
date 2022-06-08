import styled from "styled-components";

export const ButtonsContainer = styled.div`

    @media (max-width:767px){
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding-top: 15px;
    }
`;

export const Button = styled.button`
    background: none;
    border: none;
    color: teal;
    margin: 0 5px;
    transition: color 0.2s;

    &:hover{
        cursor: pointer;
        color: rgb(16, 175, 175);
    }

    &:disabled{
        color: rgb(189, 189, 189);
        cursor: default;
    }
`;