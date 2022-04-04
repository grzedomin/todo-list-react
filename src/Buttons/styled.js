import styled from "styled-components";

export const Button = styled.div`
    background: none;
    border: none;
    color: teal;
    margin: 0 5px;
    transition: 0.5s;

    &:hover{
        cursor: pointer;
        color: rgb(16, 175, 175);
    }

    &:disabled{
        color: rgb(189, 189, 189);
        cursor: default;
    }

    @media (max-width:767px){
        padding-top: 15px;
    }
`;