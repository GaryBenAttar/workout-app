import { useEffect, useRef, useState } from "react";

export const useSetExercise = (
  exercise,
  inProgress,
  setRoutine,
  timerArray
) => {
  const [exerciseSets, setExerciseSets] = useState(
    inProgress || exercise.sets.length > 0
      ? exercise.sets
      : [
          {
            id: 1,
            reps: "",
            weight: "",
            volume: 0,
            done: false,
          },
        ]
  );

  const [note, setNote] = useState(exercise.note);

  const restTime = useRef("Off");

  useEffect(() => {
    setRoutine((previousState) => ({
      ...previousState,
      exercises: previousState.exercises.map((value) => {
        return value.id === exercise.id
          ? {
              id: exercise.id,
              title: exercise.title,
              sets: [...exerciseSets],
              note: note,
            }
          : value;
      }),
    }));
  }, [exerciseSets, note]);

  const handleRestTime = (event) => {
    const rest = event.target.value;
    restTime.current = (timerArray.indexOf(rest) + 1) * 5;
  };

  return {
    note,
    setNote,
    exerciseSets,
    setExerciseSets,
    restTime,
    handleRestTime,
  };
};
