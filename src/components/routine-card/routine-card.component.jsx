import { useContext, useState } from "react";
import {
  RoutineCardContainer,
  RoutineOptionsContainer,
} from "./routine-card.styles";
import { RoutinesContext } from "../../contexts/routines.context";

export default function RoutineCard({ routine, handleEditRoutine }) {
  const { routines, setRoutines } = useContext(RoutinesContext);

  const [toogleEditOptions, setToggleEditOptions] = useState(false);

  const handleDeleteRoutine = (routine) => {
    setRoutines(routines.filter((obj) => obj.id !== routine.id));
  };

  return (
    <div>
      <RoutineCardContainer
        key={routine.id}
        onClick={() => setToggleEditOptions(!toogleEditOptions)}
      >
        <span>{routine.title}</span>
      </RoutineCardContainer>
      {toogleEditOptions && (
        <RoutineOptionsContainer>
          <span onClick={() => handleEditRoutine(routine)}>
            <i className="fa-solid fa-pen"></i> Edit Routine
          </span>
          <span onClick={() => handleDeleteRoutine(routine)}>
            <i className="fa-solid fa-trash"></i> Delete Routine
          </span>
        </RoutineOptionsContainer>
      )}
    </div>
  );
}
