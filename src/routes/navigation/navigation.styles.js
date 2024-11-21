import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/app_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  min-width: 250px;
  min-height: 100vh;

  padding: 20px;
  margin-right: 50px;

  border-right: ${(props) => props.theme.borders};
  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoStyled = styled(Logo)`
  width: 50px;
  height: 30px;
`;

export const LogoSpan = styled.span`
  font-weight: 600;
`;

export const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
`;

export const StyledIcon = styled(FontAwesomeIcon)``;
