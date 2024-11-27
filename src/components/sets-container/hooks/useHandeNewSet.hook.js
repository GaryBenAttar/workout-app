export const useHandleNewSet = (
  inProgress,
  exerciseSets,
  setExerciseSets,
  restTime
) => {
  const handleAddSet = () => {
    setExerciseSets((previousState) => [
      ...previousState,
      {
        id: exerciseSets.length + 1,
        reps: "",
        weight: "",
        volume: 0,
        done: false,
      },
    ]);
  };

  const handleSetExerciseSetsValues = (id, reps, weight, done) => {
    setExerciseSets((previousState) =>
      previousState.map((set) =>
        set.id === id
          ? {
              id: id,
              reps: reps,
              weight: weight,
              volume: reps * weight,
              done: done,
            }
          : set
      )
    );
  };

  const handleDeleteSet = (id) => {
    let i = 1;
    setExerciseSets((previousState) => [
      ...previousState
        .filter((set) => set.id !== id)
        .map((set) => {
          return {
            id: i++,
            ...set,
          };
        }),
    ]);
  };

  return { handleDeleteSet, handleSetExerciseSetsValues, handleAddSet };
};
