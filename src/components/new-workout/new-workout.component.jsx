import RoutineExercisesCard from "../routine-exercise-card/routine-exercise-card.component";
import {
  WorkoutContainer,
  WorkoutSummary,
  WorkoutSummaryContainer,
  ExercisesContainer,
  EndWorkoutButtonsContainer,
  DiscardWorkoutButton,
  FinishWorkoutButton,
} from "./new-workout.styles";
import Library from "../library/library.component";
import { useContext, useEffect, useState } from "react";
import { RoutinesContext } from "../../contexts/routines.context";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

export default function NewWorkout({ routine, duration }) {
  const { routineExercises, setRoutineExercises } = useContext(RoutinesContext);
  const { workouts, setWorkouts } = useContext(UserContext);

  const [volume, setVolume] = useState(0);
  const [numberOfSets, setNumberOfSets] = useState(0);

  const formattedDuration = `${
    Math.floor(duration / 60) > 0 ? Math.floor(duration / 60) + "min" : ""
  } ${duration % 60}s`;

  useEffect(() => {
    setNumberOfSets(
      routineExercises.reduce((acc, exercise) => {
        return acc + exercise.sets.length;
      }, 0)
    );
  }, [routineExercises]);

  const navigate = useNavigate();
  useEffect(() => setRoutineExercises(routine.exercises), []);

  const handleDiscardWorkout = () => {
    setRoutineExercises([]);
    navigate("/");
  };

  const setsDone = routineExercises.filter(
    (exercise) => exercise.sets.filter((set) => set.done).length > 0
  ).length;

  const handleFinishWorkout = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;

    setRoutineExercises([]);
    setWorkouts([
      {
        name: routine.title,
        user: "Vailrog",
        date: formattedDate,
        duration: formattedDuration,
        volume: "",
        exercises: routineExercises,
        liked: false,
      },
      ...workouts,
    ]);
    navigate("/");
  };

  return (
    <>
      <WorkoutSummaryContainer>
        <WorkoutSummary>
          <span className="heading">Duration</span>
          <span>{formattedDuration}</span>
        </WorkoutSummary>
        <WorkoutSummary>
          <span className="heading">Weight</span>
          <span>5364kg</span>
        </WorkoutSummary>
        <WorkoutSummary>
          <span className="heading">Sets</span>
          <span>{setsDone}</span>
        </WorkoutSummary>
      </WorkoutSummaryContainer>
      <EndWorkoutButtonsContainer>
        <FinishWorkoutButton
          onClick={() =>
            setsDone > 0
              ? handleFinishWorkout()
              : alert("You must complete at least 1 set")
          }
        >
          Finish
        </FinishWorkoutButton>
        <DiscardWorkoutButton onClick={handleDiscardWorkout}>
          Discard Workout
        </DiscardWorkoutButton>
      </EndWorkoutButtonsContainer>
      <WorkoutContainer>
        <ExercisesContainer>
          {routineExercises.map((exercise) => (
            <RoutineExercisesCard
              inProgress={true}
              exercise={exercise}
              key={exercise.title}
            />
          ))}
        </ExercisesContainer>
        <Library page="workout" />
      </WorkoutContainer>
    </>
  );
}
