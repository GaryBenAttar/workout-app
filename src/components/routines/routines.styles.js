import styled from "styled-components";
import Button from "../../components/ui-components/button/button.component";

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

export const MyRoutinesHeading = styled.h2``;

export const NewRoutinesButton = styled(Button)`
  height: 40px;
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
