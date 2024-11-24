import styled from "styled-components";
import Button from "../../ui-components/button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignOutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: ${(props) => props.theme.borders};

  padding: 20px;
`;

export const SignOutSpan = styled.span``;

export const SignOutButton = styled(Button)`
  border: none;
`;

export const IconStyled = styled(FontAwesomeIcon)``;
