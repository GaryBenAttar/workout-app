import { useContext, useEffect } from "react";
import Library from "../../components/library/library.component";
import NewRoutine from "../../components/new-routine/new-routine.component";
import {
  CreateRoutineContainer,
  NewRoutineContainer,
  CreateRoutineHeader,
  SaveRoutineButton,
} from "./create-routine.styles";
import { RoutinesContext } from "../../contexts/routines.context";
import { useNavigate } from "react-router-dom";

export default function CreateRoutine() {
  const navigate = useNavigate();

  const {
    routines,
    setRoutines,
    editRoutine,
    routineExercises,
    setRoutineExercises,
    routineTitle,
    setRoutineTitle,
  } = useContext(RoutinesContext);

  useEffect(() => {
    editRoutine.id && setRoutineExercises(editRoutine.exercises);
    editRoutine.id && setRoutineTitle(editRoutine.title);
  }, []);

  const mode = editRoutine.id ? "edit-routine" : "create-routine";

  const handleSaveRoutine = (mode) => {
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
          obj.id === editRoutine.id
            ? {
                id: editRoutine.id,
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
          <h2>Create Routine</h2>
          <SaveRoutineButton
            onClick={
              routineTitle !== "" ? () => handleSaveRoutine(mode) : () => {}
            }
            className={routineTitle === "" ? "disabled" : ""}
          >
            Save Routine
          </SaveRoutineButton>
        </CreateRoutineHeader>
        <NewRoutine inProgress={false} />
      </NewRoutineContainer>
      <Library page="create-routine" />
    </CreateRoutineContainer>
  );
}
