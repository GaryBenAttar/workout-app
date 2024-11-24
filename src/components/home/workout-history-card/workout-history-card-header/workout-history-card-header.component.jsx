import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  DeleteWorkoutButton,
  StyledIcon,
  UserImageContainer,
  WorkoutHistoryCardHeaderContainer,
  WorkoutUserInfoContainer,
  WorkoutUserInfoDateSpan,
  WorkoutUserInfoDiv,
  WorkoutUserInfoSpan,
} from "./workout-history-card-header.styles";

import UserImage from "../../../../assets/logo_panda.png";

const WorktoutHistoryCardHeader = ({ date, user, handleDeleteWorkout }) => {
  return (
    <WorkoutHistoryCardHeaderContainer>
      <WorkoutUserInfoContainer>
        <UserImageContainer alt="user" src={UserImage} />
        <WorkoutUserInfoDiv>
          <WorkoutUserInfoSpan>{user}</WorkoutUserInfoSpan>
          <WorkoutUserInfoDateSpan>{date}</WorkoutUserInfoDateSpan>
        </WorkoutUserInfoDiv>
      </WorkoutUserInfoContainer>
      <DeleteWorkoutButton onClick={() => handleDeleteWorkout(date)}>
        <StyledIcon icon={faTrash} />
      </DeleteWorkoutButton>
    </WorkoutHistoryCardHeaderContainer>
  );
};

export default WorktoutHistoryCardHeader;
