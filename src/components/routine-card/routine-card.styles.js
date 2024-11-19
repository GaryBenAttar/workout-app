import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateX(-10px);
} to {
  opacity: 1;
}
`;
export const RoutineCardContainer = styled.div``;

export const RoutineCardContent = styled.div`
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
`;

export const RoutineCardSpan = styled.span`
  font-size: 1.4rem;
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

  animation: ${fadeIn} 0.8s;
`;

export const RoutineOptionsSpan = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)``;
