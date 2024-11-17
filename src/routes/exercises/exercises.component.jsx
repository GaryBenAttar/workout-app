import { useContext, useEffect, useState } from "react";

import Library from "../../components/library/library.component";
import {
  ExerciseInfoContainer,
  ExercisesContainer,
  ExerciseStatsContainer,
  NoExerciseContainer,
} from "./exercises.styles";
import ExerciseInfoCard from "../../components/exercise-info-card/exercise-info-card.component";
import { SettingsContext } from "../../contexts/settings.context";
export default function Exercises() {
  const [exercise, setExercise] = useState("");
  const handleSetExercise = (exercise) => setExercise(exercise);

  const { setActiveNavLink } = useContext(SettingsContext);

  useEffect(() => setActiveNavLink("exercises"), []);

  return (
    <ExercisesContainer>
      <ExerciseInfoContainer>
        <h2>Exercises</h2>
        <ExerciseStatsContainer
          className={`${exercise === "" ? "centered" : ""}`}
        >
          {exercise === "" ? (
            <NoExerciseContainer>
              <i className="fa-solid fa-dumbbell"></i>
              <span>Select Exercise</span>
              <span className="grey">
                Click on an exercise to see statistics about it.
              </span>
            </NoExerciseContainer>
          ) : (
            <ExerciseInfoCard exercise={exercise} />
          )}
        </ExerciseStatsContainer>
      </ExerciseInfoContainer>
      <Library page="exercises" handleExerciseClick={handleSetExercise} />
    </ExercisesContainer>
  );
}
