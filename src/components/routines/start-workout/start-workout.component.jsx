import { useContext, useState } from "react";

import {
  ChooseRoutineContainer,
  RoutineCard,
  RoutineCardSpan,
  StartWorkoutContainer,
} from "./start-workout.styles";
import { RoutinesContext } from "../../../contexts/routines.context";
import NewWorkout from "./new-workout/new-workout.component";
import { useLocation } from "react-router-dom";

const StartWorkout = () => {
  const location = useLocation();
  const startRoutine = location.state?.routine;

  const { routinesList } = useContext(RoutinesContext);

  const [routineStart, setRoutineStart] = useState(
    startRoutine ? startRoutine : {}
  );

  const emptyRoutine = {
    id: Date.now(),
    title: "",
    exercises: [],
  };

  return (
    <StartWorkoutContainer>
      {!routineStart.id ? (
        <ChooseRoutineContainer>
          {routinesList.map((routine) => (
            <RoutineCard
              onClick={() => setRoutineStart(routine)}
              key={routine.id}
            >
              <RoutineCardSpan>{routine.title}</RoutineCardSpan>
            </RoutineCard>
          ))}
          <RoutineCard
            onClick={() => setRoutineStart(emptyRoutine)}
            key="empty"
          >
            <RoutineCardSpan>Empty Routine</RoutineCardSpan>
          </RoutineCard>
        </ChooseRoutineContainer>
      ) : (
        <NewWorkout routineStart={routineStart} />
      )}
    </StartWorkoutContainer>
  );
};

export default StartWorkout;
