import styled from "styled-components";
import Button from "../../components/button/button.component";

export const SettingsContainer = styled.div`
  display: flex;

  width: 100%;
  margin: 20px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};

  & > * {
    padding: 10px;
  }
`;

export const FieldOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  border-left: ${(props) => props.theme.borders};
`;

export const SaveChangesButton = styled(Button)`
  align-self: flex-end;
  padding: 10px;
  border: none;
  border-radius: 4px;

  background-color: ${(props) => props.theme.color.blue};
  color: white;
`;
