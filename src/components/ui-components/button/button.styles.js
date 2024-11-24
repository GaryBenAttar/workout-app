import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
  color: ${(props) => props.theme.color.textMain};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
  }
`;

export const BlueButton = styled.button`
  border: none;
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.blue};
  color: white;
`;

export const RedButton = styled.button`
  border: none;
  border-radius: 8px;

  background-color: red;
  color: white;
`;
