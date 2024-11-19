import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;

  background-color: ${(props) => props.theme.color.bodyBackground};
  color: ${(props) => props.theme.color.textMain};
`;
