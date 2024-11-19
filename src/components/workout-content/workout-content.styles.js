import styled from "styled-components";

export const WorkoutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
`;

export const SetContent = styled.div`
  display: flex;
  gap: 10px;
`;

export const SetContentSpan = styled.div`
  display: flex;
  gap: 10px;
`;

export const ExerciseImage = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;

export const WorkoutDetailsHeading = styled.h3`
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.color.grey
      : props.theme.color.lightGrey};

  margin: 0px;
  font-size: 0.8rem;
`;
