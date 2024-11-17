import styled from "styled-components";
import { borders } from "../../utils/css-const.utils";

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
  background-color: ${(props) => props.theme.color.sectionBackground};
  min-height: 400px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  padding: 20px;
`;

export const ExerciseStats = styled.div``;
