import { useEffect, useState } from "react";

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

const RoutineExerciseCard = ({
  exercise,
  inProgress,
  routineExercises,
  setRoutineExercises,
}) => {
  const { title } = exercise;

  const [exerciseSets, setExerciseSets] = useState(
    inProgress || exercise.sets.length > 0
      ? exercise.sets
      : [
          {
            id: 1,
            reps: "",
            weight: "",
            done: false,
          },
        ]
  );

  const [restTime, setRestTime] = useState("Off");

  const [note, setNote] = useState(exercise.note);

  useEffect(() => {
    setRoutineExercises(
      routineExercises.map((value) => {
        return value.id === exercise.id
          ? {
              id: exercise.id,
              title: exercise.title,
              sets: [...exerciseSets],
              note: note,
            }
          : value;
      })
    );
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
    const restTime = event.target.value;
    setRestTime((timerArray.indexOf(restTime) + 1) * 5);
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
        inProgress={inProgress}
        exerciseSets={exerciseSets}
        setExerciseSets={setExerciseSets}
        restTime={restTime}
      />
    </RoutineExerciseCardContainer>
  );
};

export default RoutineExerciseCard;
