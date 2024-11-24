import {
  AddSetButton,
  DoneSpan,
  RepsCount,
  RepsCountSpan,
  SetCount,
  SetCountSpan,
  SetsRepsContainer,
  SetsRepsHeadings,
  WeightLifted,
  WeightLiftedSpan,
} from "./sets-container.styles";

import NewSet from "./new-set/new-set.component";
const SetsContainer = ({
  inProgress,
  exerciseSets,
  setExerciseSets,
  restTime,
}) => {
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

  return (
    <>
      <SetsRepsContainer>
        <SetsRepsHeadings>
          <SetCount>
            <SetCountSpan>SET</SetCountSpan>
          </SetCount>
          <RepsCount>
            <RepsCountSpan>REPS</RepsCountSpan>
          </RepsCount>
          <WeightLifted>
            <WeightLiftedSpan>WEIGHT</WeightLiftedSpan>
          </WeightLifted>
          {inProgress ? <DoneSpan>Done</DoneSpan> : <DoneSpan></DoneSpan>}
        </SetsRepsHeadings>
        {exerciseSets.map((set) => (
          <NewSet
            deleteSet={handleDeleteSet}
            setExerciseSetsValues={handleSetExerciseSetsValues}
            set={set}
            key={`${set.id}`}
            restTime={restTime}
            inProgress={inProgress}
          />
        ))}
        <AddSetButton onClick={handleAddSet}>Add Set</AddSetButton>
      </SetsRepsContainer>
    </>
  );
};

export default SetsContainer;
