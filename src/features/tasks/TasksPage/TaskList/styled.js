import styled, { css } from "styled-components";
import trash from "./trash.png";
import { Link, NavLink } from "react-router-dom";

export const List = styled.ul`
    padding: 0px;
    list-style-type: none;
`;

export const Item = styled.li`
    list-style-type: none;
    border-bottom: 2px solid rgba(218, 218, 218, 0.788);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 6px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    flex-grow: 1;
    margin-left: 10px;
    margin-right: 10px;
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;    
    `}
`;

export const Button = styled.button`
    min-height: 34px;
    min-width: 34px;
    border: none;
    transition: 0.5s;
    font-size: 19px;

    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(110%);
        transition: 0.1s;
    }

    ${({ toggleDone }) => toggleDone && css`
        background-color: rgb(38, 109, 20);
        color: #fff;

        &:hover{
            background-color: rgb(58, 163, 32);
        }
    `}

    ${({ remove }) => remove && css`
        background: url("${trash}");
        background-color: rgb(206, 10, 49);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 60%;

        &:hover {
            background-color: rgb(252, 36, 80);
        }
    `}
`;

const activeClassName = "active";

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #4d4d4d;
    transition: 0.5s;

    &:active {
        color: #fff;
        font-weight: bolder;
        text-decoration: none;
    }

    &:hover{
        color: #737373;
    };
`;