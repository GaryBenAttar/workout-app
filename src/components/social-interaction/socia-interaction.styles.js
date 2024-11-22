import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Button from "../button/button.component";

export const SocialInteractionContainer = styled.div`
  display: flex;
  width: 100%;

  font-size: 1.2em;

  border-top: ${(props) => props.theme.borders};
`;

export const SocialInteraction = styled.div`
  display: flex;
  justify-content: center;

  width: 33%;
  margin: 10px 0px;

  border-left: ${(props) => props.middle === "true" && props.theme.borders};
  border-right: ${(props) => props.middle === "true" && props.theme.borders};
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  border-top: ${(props) => props.theme.borders};
  padding: 20px;
`;

export const CommentInput = styled.input`
  border: none;
  border-radius: 8px;

  height: 40px;
  width: 100%;

  background-color: ${(props) => props.theme.color.input};
  color: ${(props) => props.theme.color.textMain};
`;

export const CommentButton = styled(Button)`
  border: none;
  background-color: ${(props) => props.theme.color.sectionBackground};
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.color.grey
      : props.theme.color.lightGrey};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.color.blue};

  &:hover {
    cursor: pointer;
  }
`;
