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

const RoutineCard = ({ routine, handleRedirectRoutine }) => {
  const { setRoutinesList } = useContext(RoutinesContext);

  const [toogleEditOptions, setToggleEditOptions] = useState(false);

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
            onClick={() => handleRedirectRoutine("start-workout", routine)}
          >
            <StyledIcon icon={faPlay} /> Start Routine
          </RoutineOptionsSpan>
          <RoutineOptionsSpan
            onClick={() => handleRedirectRoutine("create-routine", routine)}
          >
            <StyledIcon icon={faPen} /> Edit Routine
          </RoutineOptionsSpan>
          <RoutineOptionsSpan
            onClick={() =>
              setRoutinesList((previousRoutines) =>
                previousRoutines.filter((obj) => obj.id !== routine.id)
              )
            }
          >
            <StyledIcon icon={faTrash} /> Delete Routine
          </RoutineOptionsSpan>
        </RoutineOptionsContainer>
      )}
    </RoutineCardContainer>
  );
};

export default RoutineCard;
