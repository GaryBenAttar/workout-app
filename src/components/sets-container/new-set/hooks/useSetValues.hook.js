import { useState } from "react";

export const useSetValues = (setExerciseSetsValues, set, restTime) => {
  const [isDone, setIsDone] = useState({
    done: false,
    toggleCountdown: false,
    countdown: restTime,
  });

  const { done, toggleCountdown, countdown } = isDone;

  const handleChangeReps = (event) => {
    if (event.target.value >= 0) {
      setExerciseSetsValues(set.id, event.target.value, set.weight);
    }
  };

  const handleChangeWeight = (event) => {
    if (event.target.value >= 0) {
      setExerciseSetsValues(set.id, set.reps, event.target.value);
    }
  };

  const handleDone = () => {
    if (set.reps > 0) {
      setIsDone((previousState) => ({
        done: !previousState.done,
        toggleCountdown:
          restTime !== "Off"
            ? !previousState.toggleCountdown
            : previousState.toggleCountdown,
        countdown: restTime,
      }));
      setExerciseSetsValues(set.id, set.reps, set.weight, !done);
    } else {
      alert("You need to do at least 1 rep");
    }
  };

  return {
    done,
    toggleCountdown,
    countdown,
    handleChangeReps,
    handleChangeWeight,
    handleDone,
  };
};
