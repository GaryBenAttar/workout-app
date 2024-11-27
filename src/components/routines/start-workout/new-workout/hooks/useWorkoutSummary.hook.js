import { useEffect, useState } from "react";

export const useWorkoutSummary = (routine) => {
  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration((previousDuration) => previousDuration + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [routine]);

  const formattedDuration = `${
    Math.floor(duration / 60) > 0 ? Math.floor(duration / 60) + "min" : ""
  } ${duration % 60}s`;

  useEffect(
    () =>
      setVolume(
        routine.exercises.reduce(
          (acc, exercise) =>
            acc +
            Number(
              exercise.sets.reduce(
                (setsAcc, set) =>
                  set.done ? acc + Number(set.weight * set.reps) : setsAcc,
                0
              )
            ),
          0
        )
      ),
    [routine.exercises]
  );

  const setsDone = routine.exercises.filter(
    (exercise) => exercise.sets.filter((set) => set.done).length > 0
  ).length;

  return { formattedDuration, volume, setsDone };
};
