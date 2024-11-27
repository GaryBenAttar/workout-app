import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  WorkoutContainer,
  EndWorkoutButtonsContainer,
  DiscardWorkoutButton,
  FinishWorkoutButton,
} from "./new-workout.styles";

import Library from "../../../library/library.component";
import WorkoutSummary from "./workout-summary/workout-summary.component";
import ExercisesList from "../../../exercices-list/exercises-list.component";

import { useWorkoutSummary } from "./hooks/useWorkoutSummary.hook";
import { useFinishWorkout } from "./hooks/useFinishWorkout.hook";

const NewWorkout = ({ routineStart }) => {
  const navigate = useNavigate();

  const [routine, setRoutine] = useState(routineStart);

  const { formattedDuration, volume, setsDone } = useWorkoutSummary(routine);
  const { handleFinishWorkout } = useFinishWorkout(routine);

  return (
    <>
      <WorkoutSummary
        duration={formattedDuration}
        volume={volume}
        setsDone={setsDone}
      />
      <EndWorkoutButtonsContainer>
        <FinishWorkoutButton
          buttonType={"blue"}
          onClick={() =>
            setsDone > 0
              ? handleFinishWorkout()
              : alert("You must complete at least 1 set")
          }
        >
          Finish
        </FinishWorkoutButton>
        <DiscardWorkoutButton buttonType="red" onClick={() => navigate("/")}>
          Discard Workout
        </DiscardWorkoutButton>
      </EndWorkoutButtonsContainer>
      <WorkoutContainer>
        <ExercisesList
          exercises={routine.exercises}
          setRoutine={setRoutine}
          inProgress={true}
        />
        <Library
          handleExerciseClick={(exercise) =>
            setRoutine((previousState) => ({
              ...previousState,
              exercises: [
                ...routine.exercises,
                {
                  id: Date.now(),
                  title: exercise.title,
                  note: "",
                  sets: [{ id: 1, reps: "", weight: "", done: false }],
                },
              ],
            }))
          }
        />
      </WorkoutContainer>
    </>
  );
};

export default NewWorkout;
