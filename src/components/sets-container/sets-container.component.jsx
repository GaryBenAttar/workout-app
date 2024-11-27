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
import { useHandleNewSet } from "./hooks/useHandeNewSet.hook";

const SetsContainer = ({
  inProgress,
  exerciseSets,
  setExerciseSets,
  restTime,
}) => {
  const { handleDeleteSet, handleSetExerciseSetsValues, handleAddSet } =
    useHandleNewSet(inProgress, exerciseSets, setExerciseSets, restTime);

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
