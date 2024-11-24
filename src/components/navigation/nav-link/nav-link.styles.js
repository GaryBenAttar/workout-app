import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLinkContainer = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 30px;
  cursor: pointer;
  color: grey;

  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => !props.active && props.theme.color.hover};
  }

  background-color: ${(props) =>
    props.active === "true" && props.theme.color.lightBlue};
  color: ${(props) => props.active === "true" && props.theme.color.blue};
`;

export const StyledIcon = styled(FontAwesomeIcon)``;

export const NavLinkSpan = styled.span``;
