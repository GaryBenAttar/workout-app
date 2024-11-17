import { useState } from "react";

import Library from "../../components/library/library.component";
import {
  ExerciseInfoContainer,
  ExercisesContainer,
  ExerciseStatsContainer,
} from "./exercises.styles";
import ExerciseInfoCard from "../../components/exercise-info-card/exercise-info-card.component";
export default function Exercises() {
  const [exercise, setExercise] = useState("");
  const handleSetExercise = (exercise) => setExercise(exercise);

  return (
    <ExercisesContainer>
      <ExerciseInfoContainer>
        <h2>Exercises</h2>
        <ExerciseStatsContainer>
          {exercise === "" ? (
            <div>Select Exercise</div>
          ) : (
            <ExerciseInfoCard exercise={exercise} />
          )}
        </ExerciseStatsContainer>
      </ExerciseInfoContainer>
      <Library page="exercises" handleExerciseClick={handleSetExercise} />
    </ExercisesContainer>
  );
}
