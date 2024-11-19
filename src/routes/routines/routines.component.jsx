import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RoutinesContext } from "../../contexts/routines.context";

import {
  RoutinesContainer,
  NewRoutinesContainer,
  MyRoutinesContainer,
  NewRoutinesButton,
  MyRoutinesHeading,
} from "./routines.styles";

import RoutineCard from "../../components/routine-card/routine-card.component";

const Routines = () => {
  const { routines } = useContext(RoutinesContext);

  const navigate = useNavigate();

  const handleEditRoutine = (routine) => {
    navigate("/routines/create-routine", { state: { routine: routine } });
  };

  return (
    <>
      <RoutinesContainer>
        <NewRoutinesContainer>
          New Routines
          <NewRoutinesButton onClick={() => handleEditRoutine({})}>
            Create Routine
          </NewRoutinesButton>
        </NewRoutinesContainer>
        <MyRoutinesContainer>
          <MyRoutinesHeading>My Routines</MyRoutinesHeading>
          {routines.map((routine) => (
            <RoutineCard
              routine={routine}
              handleEditRoutine={handleEditRoutine}
              key={routine.id}
            />
          ))}
        </MyRoutinesContainer>
      </RoutinesContainer>
    </>
  );
};

export default Routines;
