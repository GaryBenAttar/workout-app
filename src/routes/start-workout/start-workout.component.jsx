import { useContext, useState } from "react";

import {
  ChooseRoutineContainer,
  RoutineCard,
  StartWorkoutContainer,
} from "./start-workout.styles";
import { RoutinesContext } from "../../contexts/routines.context";
import NewWorkout from "../../components/new-workout/new-workout.component";
export default function StartWorkout() {
  const [routineStart, setRoutineStart] = useState(null);
  const { routines } = useContext(RoutinesContext);

  const [duration, setDuration] = useState(0);

  const emptyRoutine = {
    title: "",
    exercises: [],
  };

  let i = 0;

  const startWorkout = (routine) => {
    setRoutineStart(routine);
    setInterval(() => {
      i += 1;
      setDuration(0);
      setDuration(duration + i);
    }, 1000);
  };

  return (
    <StartWorkoutContainer>
      {!routineStart ? (
        <ChooseRoutineContainer>
          {routines.map((routine) => (
            <RoutineCard
              onClick={() => startWorkout(routine)}
              key={routine.title}
            >
              <span>{routine.title}</span>
            </RoutineCard>
          ))}
          <RoutineCard onClick={() => startWorkout(emptyRoutine)} key="empty">
            <span>Empty Routine</span>
          </RoutineCard>
        </ChooseRoutineContainer>
      ) : (
        <NewWorkout routine={routineStart} duration={duration} />
      )}
    </StartWorkoutContainer>
  );
}
