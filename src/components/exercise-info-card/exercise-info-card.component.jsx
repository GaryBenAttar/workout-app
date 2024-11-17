import React from "react";
import {
  ExerciseInfoCardContainer,
  ExerciseInfoContainer,
  ExerciseInfo,
  ExerciseImageContainer,
} from "./exercise-info-car.styles";

export default function ExerciseInfoCard({ exercise }) {
  const { imageUrl, title } = exercise;

  const equipments =
    exercise.equipments.length === 0
      ? "None"
      : exercise.equipments.reduce((acc, equiment) => acc + `${equiment} `, "");

  return (
    <ExerciseInfoCardContainer>
      <ExerciseInfoContainer>
        <ExerciseInfo>
          <h2>{title}</h2>
          <span>Equipment: {equipments}</span>
          <span>Primary Muscle Group: {exercise.muscles[0]}</span>
        </ExerciseInfo>
        <ExerciseImageContainer>
          <img alt={`${title}`} src={imageUrl} />
        </ExerciseImageContainer>
      </ExerciseInfoContainer>
    </ExerciseInfoCardContainer>
  );
}
