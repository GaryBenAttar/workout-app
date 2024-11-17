import { useNavigate } from "react-router-dom";
import {
  RoutinesContainer,
  NewRoutinesContainer,
  MyRoutinesContainer,
  NewRoutinesButton,
} from "./routines.styles";
import { useContext, useEffect } from "react";
import { RoutinesContext } from "../../contexts/routines.context";
import RoutineCard from "../../components/routine-card/routine-card.component";
import { SettingsContext } from "../../contexts/settings.context";

export default function Routines() {
  const { routines, setEditRoutine } = useContext(RoutinesContext);

  const navigate = useNavigate();

  const handleEditRoutine = (routine) => {
    setEditRoutine(routine);
    navigate("/create-routine");
  };

  const { setActiveNavLink } = useContext(SettingsContext);

  useEffect(() => setActiveNavLink("routines"), []);
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
          <h2>My Routines</h2>
          {routines.map((routine) => {
            return (
              <RoutineCard
                routine={routine}
                handleEditRoutine={handleEditRoutine}
                key={routine.id}
              />
            );
          })}
        </MyRoutinesContainer>
      </RoutinesContainer>
    </>
  );
}
