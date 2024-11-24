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

import exercisesList from "../../exercises.json";
import SetsContainer from "../sets-container/sets-container.component";

const RoutineExerciseCard = ({ exercise, inProgress, setRoutine }) => {
  const { title, sets } = exercise;

  const [exerciseSets, setExerciseSets] = useState(
    inProgress || sets.length > 0
      ? sets
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

  const handleRestTime = (event) => {
    const rest = event.target.value;
    restTime.current = (timerArray.indexOf(rest) + 1) * 5;
  };

  const currentExercise = exercisesList.filter(
    (obj) => obj.title === exercise.title
  )[0];

  return (
    <RoutineExerciseCardContainer>
      <ExerciseInfoContainer>
        <ExerciseInfo>
          <ExerciseImg alt={`${title}`} src={currentExercise.imageUrl} />
          <ExerciseInfoSpan>{title}</ExerciseInfoSpan>
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
