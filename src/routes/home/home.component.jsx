import { useContext } from "react";

import {
  HomeContainer,
  HomeHeading,
  HomeHeadingSpan,
  NoWorkoutContainer,
  StartWorkoutButton,
  UsersContainer,
  WorkoutsHistoryContainer,
} from "./home.styles";

import WorkoutHistoryCard from "../../components/workout-history-card/workout-history-card.component";
import UserCard from "../../components/user-card/user-card.component";
// import SuggestedAthletes from "../../components/suggested-athletes/suggested-athletes.component";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { workouts } = user;

  const handleDeleteWorkout = (date) => {
    setUser((previousState) => {
      return {
        ...previousState,
        workouts: [
          ...previousState.workouts.filter((obj) => obj.date !== date),
        ],
      };
    });
  };

  return (
    <HomeContainer>
      <WorkoutsHistoryContainer>
        <HomeHeading>
          <HomeHeadingSpan>Home</HomeHeadingSpan>
          <StartWorkoutButton
            buttonType="blue"
            onClick={() => navigate("/routines/start-workout")}
          >
            Start Workout
          </StartWorkoutButton>
        </HomeHeading>
        {workouts.length === 0 ? (
          <NoWorkoutContainer>No Workout Done Yet</NoWorkoutContainer>
        ) : (
          workouts.map((workout) => (
            <WorkoutHistoryCard
              workout={workout}
              key={workout.date}
              handleDeleteWorkout={handleDeleteWorkout}
            />
          ))
        )}
      </WorkoutsHistoryContainer>
      <UsersContainer>
        <UserCard />
        {/* <SuggestedAthletes /> */}
      </UsersContainer>
    </HomeContainer>
  );
};

export default Home;
