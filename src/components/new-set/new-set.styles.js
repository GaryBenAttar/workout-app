import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const NewSetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  padding: 10px;

  background-color: ${(props) =>
    props.done ? "#3cc63c" : props.theme.color.input};

  border-radius: 4px;
`;

export const NewSetId = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 30px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const NewSetInput = styled.input`
  height: 30px;
  width: 100px;
  padding: 10px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.input};
  color: ${(props) => props.theme.color.textMain};
`;

export const Done = styled.div`
  width: 30px;

  i {
    color: ${(props) => props.theme.color.textMain};
  }
`;

export const DoneButton = styled.button`
  border-radius: 50%;
  border: ${(props) => props.theme.borders};
`;

export const StyledIcon = styled(FontAwesomeIcon)``;
