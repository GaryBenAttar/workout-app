import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
from {
  opacity: 0;
  transform: translateX(-10px);
} to {
  opacity: 1;
}
`;

export const RoutineOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  gap: 10px;

  position: absolute;
  right: 50px;

  padding: 10px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};

  animation: ${fadeOut} 0.8s;

  span:hover {
    cursor: pointer;
  }
`;

export const RoutineCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 50px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;
  padding: 10px 20px;

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
    cursor: pointer;
  }

  span {
    font-size: large;
  }
`;
