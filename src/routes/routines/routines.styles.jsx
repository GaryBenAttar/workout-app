import styled from "styled-components";

export const RoutinesContainer = styled.div`
  display: flex;
  gap: 20px;

  width: 100%;
  padding: 20px;

  &.blured {
    opacity: 0.2;
  }

  & > * {
    background-color: ${(props) => props.theme.color.sectionBackground};
    padding: 20px;
  }
`;

export const NewRoutinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  height: 130px;
  min-width: 300px;
  width: 30%;
`;

export const MyRoutinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  height: fit-content;

  width: 70%;
`;

export const NewRoutinesButton = styled.button`
  height: 40px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
  color: ${(props) => props.theme.color.textMain};

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
    cursor: pointer;
  }
`;

export const RenameWorkoutContainer = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translateX(-50%);

  width: 500px;
  padding: 20px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.sectionBackground};

  &.displayed {
    display: none;
  }

  input {
    width: 100%;
    border: none;
  }
`;
