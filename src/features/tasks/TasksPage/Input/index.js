import styled from "styled-components";

export const Input = styled.input`
    flex-basis: 75%;
    min-height: 30px;
    border: 1px solid #bbb;
    border-radius: 3px;
    padding: 5px;

    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
    align-items: center;
`;