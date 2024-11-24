import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

const CreateRoutine = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { routinesList, setRoutinesList } = useContext(RoutinesContext);

  const [routine, setRoutine] = useState(location.state.routine);

  const { title } = routine;

  const onAddExercise = (exercise) => {
    setRoutine((previousState) => ({
      ...previousState,
      exercises: [
        ...previousState.exercises,
        {
          id: Date.now(),
          title: exercise.title,
          sets: [],
        },
      ],
    }));
  };

  const handleSaveRoutine = () => {
    routinesList.find((obj) => obj.id === routine.id)
      ? setRoutinesList(
          routinesList.map((obj) => (obj.id === routine.id ? routine : obj))
        )
      : setRoutinesList([...routinesList, routine]);

    navigate("/routines");
  };

  return (
    <CreateRoutineContainer>
      <NewRoutineContainer>
        <CreateRoutineHeader>
          <CreateRoutineHeading>Create Routine</CreateRoutineHeading>
          <SaveRoutineButton
            buttonType={"blue"}
            onClick={title !== "" ? () => handleSaveRoutine() : null}
            disabled={title === ""}
          >
            Save Routine
          </SaveRoutineButton>
        </CreateRoutineHeader>
        <NewRoutine routine={routine} setRoutine={setRoutine} />
      </NewRoutineContainer>
      <Library page="create-routine" handleExerciseClick={onAddExercise} />
    </CreateRoutineContainer>
  );
};

export default CreateRoutine;
