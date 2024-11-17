import { useContext } from "react";

import {
  HomeContainer,
  HomeHeading,
  NoWorkoutContainer,
  UsersContainer,
  WorkoutsHistoryContainer,
} from "./home.styles";
import WorkoutHistoryCard from "../../components/workout-history-card/workout-history-card.component";
import UserCard from "../../components/user-card/user-card.component";
// import SuggestedAthletes from "../../components/suggested-athletes/suggested-athletes.component";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { workouts } = useContext(UserContext);

  return (
    <HomeContainer>
      <WorkoutsHistoryContainer>
        <HomeHeading>
          <span>Home</span>
          <button onClick={() => navigate("/workout")}>Start Workout</button>
        </HomeHeading>
        {workouts.length === 0 ? (
          <NoWorkoutContainer>No Workout Done Yet</NoWorkoutContainer>
        ) : null}
        {workouts.map((workout) => (
          <WorkoutHistoryCard workout={workout} key={workout.date} />
        ))}
      </WorkoutsHistoryContainer>
      <UsersContainer>
        <UserCard />
        {/* <SuggestedAthletes /> */}
      </UsersContainer>
    </HomeContainer>
  );
}
