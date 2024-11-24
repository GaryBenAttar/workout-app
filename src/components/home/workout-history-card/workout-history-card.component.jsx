import {
  WorkoutDetails,
  WorkoutDetailsHeading,
  WorkoutDetailsSpan,
  WorkoutDurationAndVolume,
  WorkoutHistoryCardContainer,
  WorkoutInfoContainer,
  WourkoutNameSpan,
} from "./workout-history-card.styles";

import exercisesList from "../../../exercises.json";
import SocialInteractions from "./social-interaction/social-interaction.component";
import WorkoutContent from "./workout-content/workout-content.component";
import WorktoutHistoryCardHeader from "./workout-history-card-header/workout-history-card-header.component";

const WorkoutHistoryCard = ({ workout, handleDeleteWorkout }) => {
  const { name, user, date, duration, exercises, volume } = workout;

  return (
    <WorkoutHistoryCardContainer>
      <WorktoutHistoryCardHeader
        user={user}
        date={date}
        handleDeleteWorkout={handleDeleteWorkout}
      />
      <WorkoutInfoContainer>
        <WourkoutNameSpan>{name}</WourkoutNameSpan>
        <WorkoutDurationAndVolume>
          <WorkoutDetails>
            <WorkoutDetailsHeading>Duration</WorkoutDetailsHeading>
            <WorkoutDetailsSpan>{duration}</WorkoutDetailsSpan>
          </WorkoutDetails>
          <WorkoutDetails>
            <WorkoutDetailsHeading>Volume</WorkoutDetailsHeading>
            <WorkoutDetailsSpan>{volume}kg</WorkoutDetailsSpan>
          </WorkoutDetails>
        </WorkoutDurationAndVolume>
      </WorkoutInfoContainer>
      <WorkoutContent exercises={exercises} exercisesList={exercisesList} />
      <SocialInteractions />
    </WorkoutHistoryCardContainer>
  );
};

export default WorkoutHistoryCard;
