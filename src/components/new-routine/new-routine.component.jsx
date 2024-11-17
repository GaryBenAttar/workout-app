import { useContext } from "react";
import {
  ExercisessContainer,
  NewRoutineContainer,
  RoutineTitleInput,
} from "./new-routine.styles";
import { RoutinesContext } from "../../contexts/routines.context";
import RoutineExercisesCard from "../routine-exercise-card/routine-exercise-card.component";

export default function NewRoutine({ inProgress }) {
  const { routineTitle, setRoutineTitle, routineExercises } =
    useContext(RoutinesContext);

  const handleRoutineTitle = (event) => setRoutineTitle(event.target.value);

  return (
    <NewRoutineContainer>
      <span>Routine Title</span>
      {!inProgress && (
        <RoutineTitleInput
          placeholder="Workout Routine Title"
          onChange={handleRoutineTitle}
          value={routineTitle}
        />
      )}
      <ExercisessContainer>
        {routineExercises.map((exercise) => (
          <RoutineExercisesCard
            inProgress={inProgress}
            exercise={exercise}
            key={exercise.title}
          />
        ))}
      </ExercisessContainer>
    </NewRoutineContainer>
  );
}
