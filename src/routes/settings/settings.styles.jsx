import styled from "styled-components";
import { borders } from "../../utils/css-const.utils";

export const SettingsContainer = styled.div`
  display: flex;

  width: 100%;
  margin: 20px;

  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};

  & > * {
    padding: 10px;
  }
`;

export const FieldOptionsContainer = styled.div`
  width: 100%;
  border: ${(props) => props.theme.borders};
`;

export const SaveChangesButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.color.sectionBackground};
  color: ${(props) => props.theme.color.blue};

  &:hover {
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.sectionBackground};
  }
`;
