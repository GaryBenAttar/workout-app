import styled from "styled-components";

export const SettingsFieldContainer = styled.div`
  display: flex;
  gap: 10px;

  height: 40px;
  cursor: pointer;

  &.active {
    color: ${(props) => props.theme.color.blue};
  }
`;
