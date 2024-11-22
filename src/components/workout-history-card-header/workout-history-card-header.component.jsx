import {
  DeleteWorkoutButton,
  WorkoutHistoryCardHeaderContainer,
  WorkoutUserInfoContainer,
  WorkoutUserInfoDateSpan,
  WorkoutUserInfoDiv,
  WorkoutUserInfoSpan,
} from "./workout-history-card-header.styles";
import {
  StyledIcon,
  UserImageContainer,
} from "../workout-history-card/workout-history-card.styles";

import UserImage from "../../assets/logo_panda.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
