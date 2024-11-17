import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/app_logo.svg";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  min-width: 250px;
  min-height: 100vh;

  padding: 20px;
  margin-right: 50px;

  border-right: ${(props) => props.theme.borders};
  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const LogoStyled = styled(Logo)`
  width: 150px;
  height: 50px;
`;

export const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 30px;
  cursor: pointer;
  color: grey;

  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => props.theme.color.hover};
  }

  &.active {
    background-color: ${(props) => props.theme.color.lightBlue};
    color: ${(props) => props.theme.color.blue};
  }
`;

export const SearchUserContainer = styled.div`
  display: flex;
  padding: 8px;

  background-color: ${(props) => props.theme.color.input};
  color: ${(props) => props.theme.color.grey};

  margin-bottom: 15px;
  border-radius: 8px;
`;

export const SearchUserInput = styled.input`
  border: none;
  background-color: ${(props) => props.theme.color.input};
  color: ${(props) => props.theme.color.textMain};

  &:focus {
    outline: none;
  }
  &::before {
  }
`;
