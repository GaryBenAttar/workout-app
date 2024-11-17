import { useContext, useEffect, useState } from "react";

import {
  RoutineExerciseCardContainer,
  ExerciseImg,
  ExerciseInfo,
  Note,
  SetsRepsContainer,
  SetsRepsHeadings,
  RestTimerContainer,
  SetCount,
  RepsCount,
  WeightLifted,
} from "./routine-exercise-card.styles";

import NewSet from "../new-set/new-set.component";

import exercisesList from "../../exercises.json";
import { RoutinesContext } from "../../contexts/routines.context";

export default function RoutineExerciseCard({ exercise, inProgress }) {
  const { routineExercises, setRoutineExercises } = useContext(RoutinesContext);
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

  const [note, setNote] = useState("");

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
  }, [exerciseSets]);

  const handleAddSet = () => {
    setExerciseSets([
      ...exerciseSets,
      {
        id: exerciseSets.length + 1,
        reps: "",
        weight: "",
        done: false,
      },
    ]);
  };

  const handleSetExerciseSetsValues = (id, reps, weight, done) => {
    setExerciseSets(
      exerciseSets.map((set) =>
        set.id === id
          ? {
              id: id,
              reps: reps,
              weight: weight,
              done: done,
            }
          : set
      )
    );
  };

  const handleDeleteSet = (id) => {
    let i = 1;
    setExerciseSets([
      ...exerciseSets
        .filter((set) => set.id !== id)
        .map((set) => {
          return {
            id: i++,
            reps: set.reps,
            weight: set.weight,
            done: set.done,
          };
        }),
    ]);
  };

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
      <div>
        <ExerciseInfo>
          <ExerciseImg alt={`${title}`} src={currentExercise.imageUrl} />
          <span>{title}</span>
        </ExerciseInfo>
      </div>
      <Note>
        <span>Note</span>
        <input
          placeholder="Add pinned note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
      </Note>
      <RestTimerContainer>
        <span>Rest Timer:</span>
        <select onChange={handleRestTime}>
          <option>Off</option>
          {timerArray.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </RestTimerContainer>
      <SetsRepsContainer>
        <SetsRepsHeadings>
          <SetCount>
            <span>SET</span>
          </SetCount>
          <RepsCount>
            <span>REPS</span>
          </RepsCount>
          <WeightLifted>
            <span>WEIGHT</span>
          </WeightLifted>
          {inProgress ? <span>Done</span> : <span></span>}
        </SetsRepsHeadings>
        {exerciseSets.map((set) => (
          <NewSet
            deleteSet={handleDeleteSet}
            setExerciseSetsValues={handleSetExerciseSetsValues}
            set={set}
            key={`${exercise.title} ${set.id}`}
            restTime={restTime}
            inProgress={inProgress}
          />
        ))}

        <button onClick={handleAddSet}>Add Set</button>
      </SetsRepsContainer>
    </RoutineExerciseCardContainer>
  );
}
