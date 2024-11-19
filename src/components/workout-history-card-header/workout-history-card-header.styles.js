import styled from "styled-components";

export const WorkoutHistoryCardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
`;

export const WorkoutUserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 10px;
`;

export const WorkoutUserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkoutUserInfoSpan = styled.span``;

export const WorkoutUserInfoDateSpan = styled.span`
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.color.grey
      : props.theme.color.lightGrey};
`;

export const DeleteWorkoutButton = styled.span`
  color: red;
  cursor: pointer;

  &:not(:hover) {
    color: ${(props) => props.theme.color.sectionBackground};
  }
`;
