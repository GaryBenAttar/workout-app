import {
  NewRoutineContainer,
  NewRoutineHeading,
  RoutineTitleInput,
} from "./new-routine.styles";

import ExercisesList from "../exercices-list/exercises-list.component";

const NewRoutine = ({
  inProgress,
  routineTitle,
  routineExercises,
  setRoutineTitle,
  setRoutineExercises,
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
      <ExercisesList
        exercises={routineExercises}
        routineExercises={routineExercises}
        setRoutineExercises={setRoutineExercises}
        inProgress={false}
      />
    </NewRoutineContainer>
  );
};

export default NewRoutine;
