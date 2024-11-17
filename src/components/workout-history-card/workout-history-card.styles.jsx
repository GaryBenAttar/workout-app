import styled from "styled-components";

export const WorkoutHistoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 0.9rem;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const WorkoutHistoryCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WorkoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-bottom: ${(props) => props.theme.borders};
  padding: 20px;
`;

export const WorkoutUserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 10px;

  span.date {
    color: ${(props) => props.theme.color.grey};
  }
`;

export const DeleteWorkoutButton = styled.span`
  color: red;
  cursor: pointer;

  &:not(:hover) {
    color: ${(props) => props.theme.color.sectionBackground};
  }
`;

export const UserImageContainer = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;

export const WorkoutDurationAndVolume = styled.div`
  display: flex;
  gap: 30px;
`;

export const WorkoutDetails = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  span.heading {
    color: ${(props) => props.theme.color.grey};
  }
`;

export const WorkoutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;

  span.heading {
    color: ${(props) => props.theme.color.grey};
  }
`;

export const SetContent = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const SocialInteractionContainer = styled.div`
  display: flex;
  width: 100%;

  font-size: 1.2em;

  border-top: ${(props) => props.theme.borders};
`;

export const SocialInteraction = styled.div`
  display: flex;
  justify-content: center;

  width: 33%;
  margin: 10px 0px;

  &.middle {
    border-left: ${(props) => props.theme.borders};
    border-right: ${(props) => props.theme.borders};
  }

  i {
    color: ${(props) => props.theme.color.blue};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  border-top: ${(props) => props.theme.borders};
  padding: 20px;

  input {
    border: none;
    border-radius: 8px;

    height: 40px;
    width: 100%;

    background-color: ${(props) => props.theme.color.input};
    color: ${(props) => props.theme.color.textMain};
  }

  button {
    border: none;
    background-color: ${(props) => props.theme.color.sectionBackground};
    color: ${(props) => props.theme.color.lightGrey};
  }
`;
