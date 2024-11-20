import {
  ExercisessContainer,
  NewRoutineContainer,
  NewRoutineHeading,
  RoutineTitleInput,
} from "./new-routine.styles";

import RoutineExercisesCard from "../routine-exercise-card/routine-exercise-card.component";
import ExercisesList from "../exercices-list/exercises-list.component";

const NewRoutine = ({
  inProgress,
  routineTitle,
  routineExercises,
  setRoutineTitle,
}) => {
  return (
    <NewRoutineContainer>
      <NewRoutineHeading>Routine Title</NewRoutineHeading>
      {!inProgress && (
        <RoutineTitleInput
          placeholder="Workout Routine Title"
          onChange={(event) => setRoutineTitle(event.target.value)}
          value={routineTitle}
        />
      )}
      <ExercisesList exercises={routineExercises} />
    </NewRoutineContainer>
  );
};

export default NewRoutine;
