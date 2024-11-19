import { useContext, useEffect, useState } from "react";

import Library from "../../components/library/library.component";
import {
  ExerciseInfoContainer,
  ExerciseInfoHeading,
  ExercisesContainer,
  ExerciseStatsContainer,
  NoExerciseContainer,
  NoExerciseGreySpan,
  NoExerciseSpan,
  StyledIcon,
} from "./exercises.styles";
import ExerciseInfoCard from "../../components/exercise-info-card/exercise-info-card.component";

import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Exercises = () => {
  const [exercise, setExercise] = useState("");
  const handleSetExercise = (exercise) => setExercise(exercise);

  return (
    <ExercisesContainer>
      <ExerciseInfoContainer>
        <ExerciseInfoHeading>Exercises</ExerciseInfoHeading>
        <ExerciseStatsContainer centered={(exercise === "").toString()}>
          {exercise === "" ? (
            <NoExerciseContainer>
              <StyledIcon icon={faDumbbell} />
              <NoExerciseSpan>Select Exercise</NoExerciseSpan>
              <NoExerciseGreySpan>
                Click on an exercise to see statistics about it.
              </NoExerciseGreySpan>
            </NoExerciseContainer>
          ) : (
            <ExerciseInfoCard exercise={exercise} />
          )}
        </ExerciseStatsContainer>
      </ExerciseInfoContainer>
      <Library page="exercises" handleExerciseClick={handleSetExercise} />
    </ExercisesContainer>
  );
};

export default Exercises;
