import styled from "styled-components";

export const StartWorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
`;

export const ChooseRoutineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;

  & > * {
    background-color: ${(props) => props.theme.color.sectionBackground};
  }
`;

export const RoutineCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
