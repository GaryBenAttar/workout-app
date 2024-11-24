import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 100vh;
  width: 100%;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;
