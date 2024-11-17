import styled from "styled-components";

export const CountdownContainer = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;

  top: 0;
  left: 0;

  height: 50px;
  width: 100vw;

  background-color: ${(props) => props.theme.color.sectionBackground};

  border: ${(props) => props.theme.borders};
`;
