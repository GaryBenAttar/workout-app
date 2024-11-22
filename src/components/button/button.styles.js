import styled from "styled-components";

export const BaseButton = styled.button`
  border: ${(props) => props.theme.borders};
  background-color: ${(props) => props.theme.color.sectionBackground};

  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.color.hover};
    color: black;
  }
`;

export const BlueButton = styled.button`
  border: none;
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.blue};
  color: white;
`;
