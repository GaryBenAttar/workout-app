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

  const formattedDuration = `${
    Math.floor(duration / 60) > 0 ? Math.floor(duration / 60) + "min" : ""
  } ${duration % 60}s`;

  const navigate = useNavigate();

  useEffect(() => setRoutineExercises(routine.exercises), []);
  useEffect(
    () =>
      setVolume(
        routineExercises.reduce(
          (acc, exercise) =>
            acc +
            Number(
              exercise.sets.reduce(
                (acc, set) =>
                  set.done ? acc + Number(set.weight * set.reps) : acc,
                0
              )
            ),
          0
        )
      ),
    [routineExercises]
  );

  const handleDiscardWorkout = () => {
    setRoutineExercises([]);
    navigate("/");
  };

  const setsDone = routineExercises.filter(
    (exercise) => exercise.sets.filter((set) => set.done).length > 0
  ).length;

  const handleFinishWorkout = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    } ${currentDate.getFullYear()}, ${
      currentDate.getHours() < 10 && "0"
    }${currentDate.getHours()}:${currentDate.getMinutes()}`;

    setRoutineExercises([]);
    setWorkouts([
      {
        name: routine.title,
        user: "Vailrog",
        date: formattedDate,
        duration: formattedDuration,
        volume: volume,
        liked: false,
        exercises: routineExercises,
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
          <span className="heading">Weight (kg)</span>
          <span>{volume}</span>
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
