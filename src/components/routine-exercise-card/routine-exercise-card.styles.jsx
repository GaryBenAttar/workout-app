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

export const ExerciseInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    height: 40px;
    width: 100%;
    border: ${(props) => props.theme.borders};
    border-radius: 8px;

    background-color: ${(props) => props.theme.color.sectionBackground};
    color: ${(props) => props.theme.color.textMain};
  }
`;

export const RestTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  select {
    width: 200px;
    height: 30px;
    padding-left: 10px;
    border: ${(props) => props.theme.borders};
    border-radius: 8px;

    background-color: ${(props) => props.theme.color.select};
    color: ${(props) => props.theme.color.textMain};
  }
`;

export const SetsRepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    height: 30px;
    border: ${(props) => props.theme.borders};

    background-color: ${(props) => props.theme.color.sectionBackground};

    &:hover {
      background-color: ${(props) => props.theme.color.hover};
    }
  }
`;

export const SetsRepsHeadings = styled.div`
  display: flex;
  justify-content: space-between;

  padding-left: 10px;
`;

export const SetCount = styled.div`
  width: 30px;
  text-align: center;
`;

export const RepsCount = styled.div`
  width: 100px;

  text-align: center;
`;

export const WeightLifted = styled.div`
  width: 100px;

  text-align: center;
`;

export const SetHeadings = styled.div`
  width: 50px;
`;
