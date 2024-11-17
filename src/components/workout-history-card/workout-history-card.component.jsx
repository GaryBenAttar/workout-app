import { useContext, useState } from "react";

import {
  CommentContainer,
  DeleteWorkoutButton,
  SetContent,
  SocialInteraction,
  SocialInteractionContainer,
  UserImageContainer,
  WorkoutContentContainer,
  WorkoutDetails,
  WorkoutDurationAndVolume,
  WorkoutHistoryCardContainer,
  WorkoutHistoryCardHeader,
  WorkoutInfoContainer,
  WorkoutUserInfoContainer,
} from "./workout-history-card.styles";

import UserImage from "../../assets/logo_panda.png";

import exercisesList from "../../exercises.json";
import { UserContext } from "../../contexts/user.context";

export default function WorkoutHistoryCard({ workout }) {
  const { name, user, date, duration, exercises } = workout;
  const volume = 0;

  const { setWorkouts, workouts } = useContext(UserContext);
  const [liked, setLiked] = useState(false);

  const handleDeleteWorkout = () => {
    setWorkouts([...workouts.filter((obj) => obj.date !== date)]);
  };

  const handleSetLiked = () => {
    setLiked(!liked);
  };
  return (
    <WorkoutHistoryCardContainer>
      <WorkoutInfoContainer>
        <WorkoutHistoryCardHeader>
          <WorkoutUserInfoContainer>
            <UserImageContainer alt="user" src={UserImage} />
            <div>
              <span>{user}</span>
              <br />
              <span className="date">{date}</span>
            </div>
          </WorkoutUserInfoContainer>
          <DeleteWorkoutButton onClick={handleDeleteWorkout}>
            <i className="fa-solid fa-trash"></i>
          </DeleteWorkoutButton>
        </WorkoutHistoryCardHeader>
        <span>{name}</span>
        <WorkoutDurationAndVolume>
          <WorkoutDetails>
            <span className="heading">Duration</span>
            <span>{duration}</span>
          </WorkoutDetails>
          <WorkoutDetails>
            <span className="heading">Volume</span>
            <span>{volume}</span>
          </WorkoutDetails>
        </WorkoutDurationAndVolume>
      </WorkoutInfoContainer>
      <WorkoutContentContainer>
        <span className="heading">Workout</span>
        {exercises.map((exercise) => {
          const { sets, title } = exercise;
          const setsDone = sets.filter((set) => set.done).length;

          const exerciseImage = exercisesList.filter(
            (obj) => obj.title === exercise.title
          )[0].imageUrl;

          return setsDone > 0 ? (
            <SetContent key={sets.id}>
              <img alt="set" src={`${exerciseImage}`} />
              <p>{`${setsDone} sets ${title}`}</p>
            </SetContent>
          ) : null;
        })}
      </WorkoutContentContainer>
      <SocialInteractionContainer>
        <SocialInteraction>
          <i
            className={`fa-${liked ? "solid" : "regular"} fa-thumbs-up`}
            onClick={handleSetLiked}
          ></i>
        </SocialInteraction>
        <SocialInteraction className="middle">
          <i className="fa-solid fa-comment"></i>
        </SocialInteraction>
        <SocialInteraction>
          <i className="fa-solid fa-share"></i>{" "}
        </SocialInteraction>
      </SocialInteractionContainer>
      <CommentContainer>
        <UserImageContainer alt="user" src={UserImage} />
        <input placeholder="Write a comment..." />
        <button>Post</button>
      </CommentContainer>
    </WorkoutHistoryCardContainer>
  );
}
