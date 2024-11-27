import { useEffect, useRef, useState } from "react";

import {
  RoutineExerciseCardContainer,
  ExerciseImg,
  ExerciseInfo,
  Note,
  RestTimerContainer,
  ExerciseInfoContainer,
  ExerciseInfoSpan,
  NoteInput,
  NoteSpan,
  RestTimerSelect,
  RestTimerSelectOption,
  RestTimerSpan,
} from "./routine-exercise-card.styles";
import SetsContainer from "../sets-container/sets-container.component";
import { useSetExercise } from "./hooks/useSetExercise.hook";

const emptyArray = new Array(60);
let timerArray = [];
for (let i = 0; i < emptyArray.length * 5; i += 5) {
  timerArray = [
    ...timerArray,
    `${(i + 5) / 60 >= 1 ? Math.floor((i + 5) / 60) + "min" : ""}${
      (i + 5) % 60
    }s`,
  ];
}

const RoutineExerciseCard = ({ exercise, inProgress, setRoutine }) => {
  const {
    note,
    setNote,
    exerciseSets,
    setExerciseSets,
    handleRestTime,
    restTime,
  } = useSetExercise(exercise, inProgress, setRoutine, timerArray);

  return (
    <RoutineExerciseCardContainer>
      <ExerciseInfoContainer>
        <ExerciseInfo>
          <ExerciseImg alt={`${exercise.title}`} src={exercise.imageUrl} />
          <ExerciseInfoSpan>{exercise.title}</ExerciseInfoSpan>
        </ExerciseInfo>
      </ExerciseInfoContainer>
      <Note>
        <NoteSpan>Note</NoteSpan>
        <NoteInput
          placeholder="Add pinned note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
      </Note>
      <RestTimerContainer>
        <RestTimerSpan>Rest Timer:</RestTimerSpan>
        <RestTimerSelect onChange={handleRestTime}>
          <RestTimerSelectOption>Off</RestTimerSelectOption>
          {timerArray.map((value) => (
            <RestTimerSelectOption key={value}>{value}</RestTimerSelectOption>
          ))}
        </RestTimerSelect>
      </RestTimerContainer>
      <SetsContainer
        exerciseSets={exerciseSets}
        setExerciseSets={setExerciseSets}
        inProgress={inProgress}
        restTime={restTime.current}
      />
    </RoutineExerciseCardContainer>
  );
};

export default RoutineExerciseCard;
