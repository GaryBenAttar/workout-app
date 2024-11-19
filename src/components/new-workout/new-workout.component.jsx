import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  WorkoutContainer,
  WorkoutSummary,
  WorkoutSummaryContainer,
  ExercisesContainer,
  EndWorkoutButtonsContainer,
  DiscardWorkoutButton,
  FinishWorkoutButton,
  WorkoutSummarySpan,
  WorkoutSummaryHeadingSpan,
} from "./new-workout.styles";

import RoutineExercisesCard from "../routine-exercise-card/routine-exercise-card.component";

import Library from "../library/library.component";
import { UserContext } from "../../contexts/user.context";

const NewWorkout = ({ routine, duration }) => {
  const { user, setUser } = useContext(UserContext);

  const [routineExercises, setRoutineExercises] = useState(routine.exercises);
  const [volume, setVolume] = useState(0);
  const navigate = useNavigate();

  const formattedDuration = `${
    Math.floor(duration / 60) > 0 ? Math.floor(duration / 60) + "min" : ""
  } ${duration % 60}s`;

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
      currentDate.getHours() < 10 ? "0" : ""
    }${currentDate.getHours()}:${
      currentDate.getMinutes() < 10 ? "0" : ""
    }${currentDate.getMinutes()}`;

    setUser({
      ...user,
      workouts: [
        {
          name: routine.title,
          user: "Vailrog",
          date: formattedDate,
          duration: formattedDuration,
          volume: volume,
          liked: false,
          exercises: routineExercises,
        },
        ...user.workouts,
      ],
    });
    navigate("/");
  };

  return (
    <>
      <WorkoutSummaryContainer>
        <WorkoutSummary>
          <WorkoutSummaryHeadingSpan>Duration</WorkoutSummaryHeadingSpan>
          <WorkoutSummarySpan>{formattedDuration}</WorkoutSummarySpan>
        </WorkoutSummary>
        <WorkoutSummary>
          <WorkoutSummaryHeadingSpan>Weight (kg)</WorkoutSummaryHeadingSpan>
          <WorkoutSummarySpan>{volume}</WorkoutSummarySpan>
        </WorkoutSummary>
        <WorkoutSummary>
          <WorkoutSummaryHeadingSpan>Sets</WorkoutSummaryHeadingSpan>
          <WorkoutSummarySpan>{setsDone}</WorkoutSummarySpan>
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
              routineExercises={routineExercises}
              setRoutineExercises={setRoutineExercises}
              inProgress={true}
              exercise={exercise}
              key={exercise.title}
            />
          ))}
        </ExercisesContainer>
        <Library
          handleExerciseClick={(exercise) =>
            setRoutineExercises((previousState) => [
              ...previousState,
              {
                id: Date.now(),
                title: exercise.title,
                sets: [],
              },
            ])
          }
        />
      </WorkoutContainer>
    </>
  );
};

export default NewWorkout;
