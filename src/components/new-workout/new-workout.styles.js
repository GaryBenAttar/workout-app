import styled from "styled-components";
import Button from "../button/button.component";

export const WorkoutContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;

  width: 100%;
`;

export const ExercisesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
`;

export const EndWorkoutButtonsContainer = styled.div`
  display: flex;
  gap: 30px;

  padding: 0px 20px;
`;

export const DiscardWorkoutButton = styled(Button)`
  color: red;

  padding: 10px;
  border: none;

  background-color: ${(props) => props.theme.color.bodyBackground};

  &:hover {
    color: white;
    background-color: red;

    border-radius: 4px;
  }
`;

export const FinishWorkoutButton = styled(Button)`
  color: ${(props) => props.theme.color.blue};

  padding: 10px;
  border: none;

  background-color: ${(props) => props.theme.color.bodyBackground};

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.color.blue};

    border-radius: 4px;
  }
`;
