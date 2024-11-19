import { useContext, useEffect, useState } from "react";

import {
  ChooseRoutineContainer,
  RoutineCard,
  RoutineCardSpan,
  StartWorkoutContainer,
} from "./start-workout.styles";
import { RoutinesContext } from "../../contexts/routines.context";
import NewWorkout from "../../components/new-workout/new-workout.component";
import { useLocation } from "react-router-dom";

const StartWorkout = () => {
  const location = useLocation();
  const startRoutine = location.state?.routine;

  const [routineStart, setRoutineStart] = useState(
    startRoutine ? startRoutine : {}
  );

  const { routines } = useContext(RoutinesContext);

  const [duration, setDuration] = useState(0);

  const emptyRoutine = {
    id: Date.now(),
    title: "",
    exercises: [],
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setDuration((previousDuration) => previousDuration + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [routineStart]);

  return (
    <StartWorkoutContainer>
      {!routineStart.id ? (
        <ChooseRoutineContainer>
          {routines.map((routine) => (
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
        <NewWorkout routine={routineStart} duration={duration} />
      )}
    </StartWorkoutContainer>
  );
};

export default StartWorkout;
