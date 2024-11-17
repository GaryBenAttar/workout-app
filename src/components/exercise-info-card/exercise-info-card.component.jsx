import React from "react";
import {
  ExerciseInfoCardContainer,
  ExerciseInfoContainer,
  ExerciseInfo,
} from "./exercise-info-car.styles";

export default function ExerciseInfoCard({ exercise }) {
  const { imageUrl, title } = exercise;
  return (
    <ExerciseInfoCardContainer>
      <ExerciseInfoContainer>
        <ExerciseInfo>
          <h2>{title}</h2>
          <span>Equipment:</span>

          <span>Primary Muscle Group: {exercise.muscles[0]}</span>
        </ExerciseInfo>
        <div>
          <img alt={`${title}`} src={imageUrl} />
        </div>
      </ExerciseInfoContainer>
    </ExerciseInfoCardContainer>
  );
}
