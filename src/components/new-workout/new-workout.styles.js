import styled from "styled-components";

export const WorkoutSummaryContainer = styled.div`
  position: sticky;
  top: 0;
  width: inherit;

  display: flex;
  justify-content: space-between;
  padding: 10px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const WorkoutSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  text-align: center;
`;

export const WorkoutSummaryHeadingSpan = styled.span`
  font-weight: 600;
  font-size: small;

  color: ${(props) => props.theme.color.grey};
`;

export const WorkoutSummarySpan = styled.span``;

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

export const DiscardWorkoutButton = styled.button`
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

export const FinishWorkoutButton = styled.button`
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
