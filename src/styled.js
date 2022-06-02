import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName}))`
    text-decoration: none;
    color: #fff;
    &.${activeClassName} {
        color: #fff;
        font-weight: bolder;
        text-decoration: none;
    }
`;

export const NavLinkList = styled.ul`
    font-size: 20px;
    text-decoration: none;
    list-style-type: none;
    background-color: teal;
    margin-top: 0;
    padding: 18px;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
`;