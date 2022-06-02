import styled from "styled-components";

export const Component = styled.section`
    background-color: #fff;
    box-shadow: 0 0 5px #ddd;
    margin-bottom: 10px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #eee;
    padding: 20px;

    @media (max-width: 767px) {
       display: flex;
       flex-wrap: wrap;
       flex-direction: column;
    }
`;

export const SubHeader = styled.h2`
    margin: 0px;

    @media (max-width: 767px) {
     margin-bottom: 10px;
    }
`;

export const Content = styled.div`
    font-size: 15px;
    padding: 20px;
`;