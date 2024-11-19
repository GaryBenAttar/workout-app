import styled from "styled-components";

export const RoutineExerciseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const ExerciseImg = styled.img`
  height: 50px;
  border-radius: 50%;
`;

export const ExerciseInfoContainer = styled.div``;

export const ExerciseInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ExerciseInfoSpan = styled.span``;

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NoteSpan = styled.span``;

export const NoteInput = styled.input`
  height: 40px;
  width: 100%;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
  color: ${(props) => props.theme.color.textMain};
`;

export const RestTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RestTimerSpan = styled.span``;

export const RestTimerSelect = styled.select`
  width: 200px;
  height: 30px;
  padding-left: 10px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.select};
  color: ${(props) => props.theme.color.textMain};
`;
export const RestTimerSelectOption = styled.option``;
