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

const emptyRoutine = {
  id: Date.now(),
  title: "",
  exercises: [],
};

const Routines = () => {
  const { routinesList } = useContext(RoutinesContext);

  const navigate = useNavigate();

  const handleRedirectRoutine = (path, routine) => {
    navigate(`/routines/${path}`, { state: { routine: routine } });
  };

  return (
    <>
      <RoutinesContainer>
        <NewRoutinesContainer>
          New Routines
          <NewRoutinesButton
            onClick={() =>
              handleRedirectRoutine("create-routine", emptyRoutine)
            }
          >
            Create Routine
          </NewRoutinesButton>
        </NewRoutinesContainer>
        <MyRoutinesContainer>
          <MyRoutinesHeading>My Routines</MyRoutinesHeading>
          {routinesList.map((routine) => (
            <RoutineCard
              routine={routine}
              handleRedirectRoutine={handleRedirectRoutine}
              key={routine.id}
            />
          ))}
        </MyRoutinesContainer>
      </RoutinesContainer>
    </>
  );
};

export default Routines;
