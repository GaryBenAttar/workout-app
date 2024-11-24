import styled from "styled-components";

export const CountdownContainer = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;

  top: 0;
  left: 0;

  height: 70px;
  width: 100vw;

  background-color: ${(props) => props.theme.color.sectionBackground};

  border: ${(props) => props.theme.borders};
`;

export const CountDownSpan = styled.span`
  display: flex;
  gap: 20px;

  color: ${(props) => props.theme.color.blue};
`;

export const AddSecondsSpan = styled.span``;

export const RemoveSecondsSpan = styled.span``;
