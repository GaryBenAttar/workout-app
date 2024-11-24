import {
  NewRoutineContainer,
  NewRoutineHeading,
  RoutineTitleInput,
} from "./new-routine.styles";

import ExercisesList from "../../exercices-list/exercises-list.component";

const NewRoutine = ({ routine, setRoutine }) => {
  const { title, exercises } = routine;
  return (
    <NewRoutineContainer>
      <NewRoutineHeading>Routine Title</NewRoutineHeading>
      <RoutineTitleInput
        placeholder="Workout Routine Title"
        onChange={(event) =>
          setRoutine((previousState) => ({
            ...previousState,
            title: event.target.value,
          }))
        }
        value={title}
      />
      <ExercisesList
        exercises={exercises}
        setRoutine={setRoutine}
        inProgress={false}
      />
    </NewRoutineContainer>
  );
};

export default NewRoutine;
