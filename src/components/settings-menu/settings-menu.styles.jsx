import styled from "styled-components";
import { borders } from "../../utils/css-const.utils";

export const SettingsFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 300px;
  border-top: ${(props) => props.theme.borders};
  border-left: ${(props) => props.theme.borders};
  border-bottom: ${(props) => props.theme.borders};

  & > *:not(h2) {
    border-bottom: ${(props) => props.theme.borders};
  }
`;
