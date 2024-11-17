import styled from "styled-components";

export const NewRoutineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RoutineTitleInput = styled.input`
  border: ${(props) => props.theme.borders};
  border-radius: 8px;
  height: 40px;
  padding-left: 10px;

  background-color: ${(props) => props.theme.color.input};
  color: ${(props) => props.theme.color.textMain};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.blue};
  }
`;
export const ExercisessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
`;
