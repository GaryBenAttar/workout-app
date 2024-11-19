import { useContext, useState } from "react";
import {
  RoutineCardContainer,
  RoutineCardContent,
  RoutineCardSpan,
  RoutineOptionsContainer,
  RoutineOptionsSpan,
  StyledIcon,
} from "./routine-card.styles";
import { RoutinesContext } from "../../contexts/routines.context";
import { faPen, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RoutineCard = ({ routine, handleEditRoutine }) => {
  const { setRoutines } = useContext(RoutinesContext);
  const navigate = useNavigate();

  const [toogleEditOptions, setToggleEditOptions] = useState(false);

  const handleDeleteRoutine = (routine) => {
    setRoutines((previousRoutines) =>
      previousRoutines.filter((obj) => obj.id !== routine.id)
    );
  };

  return (
    <RoutineCardContainer>
      <RoutineCardContent
        key={routine.id}
        onClick={() => setToggleEditOptions((prevState) => !prevState)}
      >
        <RoutineCardSpan>{routine.title}</RoutineCardSpan>
      </RoutineCardContent>
      {toogleEditOptions && (
        <RoutineOptionsContainer>
          <RoutineOptionsSpan
            onClick={() =>
              navigate("/routines/start-workout", {
                state: { routine: routine },
              })
            }
          >
            <StyledIcon icon={faPlay} /> Start Routine
          </RoutineOptionsSpan>
          <RoutineOptionsSpan onClick={() => handleEditRoutine(routine)}>
            <StyledIcon icon={faPen} /> Edit Routine
          </RoutineOptionsSpan>
          <RoutineOptionsSpan onClick={() => handleDeleteRoutine(routine)}>
            <StyledIcon icon={faTrash} /> Delete Routine
          </RoutineOptionsSpan>
        </RoutineOptionsContainer>
      )}
    </RoutineCardContainer>
  );
};

export default RoutineCard;
