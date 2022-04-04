import styled from "styled-components";

export const FormContent = styled.form`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 600px;
    min-height: 30px;
    border: 1px solid #bbb;
    border-radius: 3px;
    padding: 5px;

    @media (max-width:767px) {
        flex-basis: 100%;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    margin-left: 10px;
    background-color: teal;
    color: #fff;
    transition: 0.5s;

    &:hover{
        background-color: rgb(9, 151, 151);
        transform:scale(115%);
        cursor: pointer;
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        justify-content: center;
        margin-left: 0px;
        margin-top: 8px;
    }
`;