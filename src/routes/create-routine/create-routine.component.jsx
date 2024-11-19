import { useContext, useState } from "react";
import Library from "../../components/library/library.component";
import NewRoutine from "../../components/new-routine/new-routine.component";
import {
  CreateRoutineContainer,
  NewRoutineContainer,
  CreateRoutineHeader,
  SaveRoutineButton,
  CreateRoutineHeading,
} from "./create-routine.styles";
import { RoutinesContext } from "../../contexts/routines.context";
import { useLocation, useNavigate } from "react-router-dom";

const CreateRoutine = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routine = location.state.routine;

  const { routines, setRoutines } = useContext(RoutinesContext);

  const [routineExercises, setRoutineExercises] = useState(
    routine.id ? routine.exercises : []
  );

  const [routineTitle, setRoutineTitle] = useState(
    routine.id ? routine.title : ""
  );

  const handleSetRoutineExercises = (value) => {
    setRoutineExercises(value);
  };

  const handleSetRoutineTitle = (value) => {
    setRoutineTitle(value);
  };

  const onAddExercise = (exercise) => {
    setRoutineExercises((previousState) => [
      ...previousState,
      {
        id: Date.now(),
        title: exercise.title,
        sets: [],
      },
    ]);
  };

  const handleSaveRoutine = () => {
    const mode = routine.id ? "edit-routine" : "create-routine";
    mode === "create-routine" &&
      setRoutines([
        ...routines,
        {
          id: Date.now(),
          title: routineTitle,
          exercises: [...routineExercises],
        },
      ]);

    mode === "edit-routine" &&
      setRoutines(
        routines.map((obj) =>
          obj.id === routine.id
            ? {
                id: routine.id,
                title: routineTitle,
                exercises: [...routineExercises],
              }
            : obj
        )
      );

    setRoutineExercises([]);
    setRoutineTitle("");
    navigate("/routines");
  };

  return (
    <CreateRoutineContainer>
      <NewRoutineContainer>
        <CreateRoutineHeader>
          <CreateRoutineHeading>Create Routine</CreateRoutineHeading>
          <SaveRoutineButton
            // Check why && does not work
            onClick={routineTitle !== "" ? () => handleSaveRoutine() : () => {}}
            className={routineTitle === "" ? "disabled" : ""}
          >
            Save Routine
          </SaveRoutineButton>
        </CreateRoutineHeader>
        <NewRoutine
          inProgress={false}
          routineExercises={routineExercises}
          setRoutineExercises={handleSetRoutineExercises}
          routineTitle={routineTitle}
          setRoutineTitle={handleSetRoutineTitle}
        />
      </NewRoutineContainer>
      <Library page="create-routine" handleExerciseClick={onAddExercise} />
    </CreateRoutineContainer>
  );
};

export default CreateRoutine;
