import styled from "styled-components";

export const SettingsFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 300px;

  & > *:not(h2) {
    border-bottom: ${(props) => props.theme.borders};
  }
`;
