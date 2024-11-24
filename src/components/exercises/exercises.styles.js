import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export const ExerciseInfoHeading = styled.h2``;

export const ExerciseStatsContainer = styled.div`
  display: flex;
  align-items: ${(props) => props.centered === "true" && "center"};
  justify-content: ${(props) => props.centered === "true" && "center"};

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
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: ${(props) => props.theme.color.blue};
`;

export const NoExerciseSpan = styled.span``;

export const NoExerciseGreySpan = styled.span`
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.color.grey
      : props.theme.color.lightGrey};
`;

export const ExerciseStats = styled.div``;
