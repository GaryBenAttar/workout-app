import styled from "styled-components";

export const ExercisesContainer = styled.div`
  display: flex;
  gap: 20px;

  margin: 20px;
  width: 100%;
`;

export const ExerciseInfoContainer = styled.div`
  width: 100%;
`;

export const ExerciseStatsContainer = styled.div`
  display: flex;

  &.centered {
    align-items: center;
    justify-content: center;
  }

  min-height: 400px;
  padding: 20px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const NoExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  i {
    font-size: 4rem;
    color: ${(props) => props.theme.color.blue};
  }

  .grey {
    color: ${(props) =>
      props.theme.name === "light"
        ? props.theme.color.grey
        : props.theme.color.lightGrey};
  }
`;

export const ExerciseStats = styled.div``;
