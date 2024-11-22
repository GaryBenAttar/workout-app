import styled from "styled-components";

export const SettingsFieldContainer = styled.div`
  display: flex;
  gap: 10px;

  height: 40px;
  cursor: pointer;

  color: ${(props) => props.active === "true" && props.theme.color.blue};
`;
