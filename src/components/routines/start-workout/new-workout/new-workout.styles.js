import styled from "styled-components";
import Button from "../../../ui-components/button/button.component";

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
  background-color: red;
  color: white;

  padding: 10px;
  border: none;
`;

export const FinishWorkoutButton = styled(Button)`
  padding: 10px;
`;
