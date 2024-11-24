import React from "react";
import {
  ExerciseInfoCardContainer,
  ExerciseInfoContainer,
  ExerciseInfo,
  ExerciseImageContainer,
  ExerciseInfoSpan,
  ExerciseInfoHeading,
  ExerciseImage,
} from "./exercise-info-car.styles";

const ExerciseInfoCard = ({ exercise }) => {
  const { imageUrl, title } = exercise;

  const equipments =
    exercise.equipments.length === 0
      ? "None"
      : exercise.equipments.reduce((acc, equiment) => acc + `${equiment} `, "");

  return (
    <ExerciseInfoCardContainer>
      <ExerciseInfoContainer>
        <ExerciseInfo>
          <ExerciseInfoHeading>{title}</ExerciseInfoHeading>
          <ExerciseInfoSpan>Equipment: {equipments}</ExerciseInfoSpan>
          <ExerciseInfoSpan>
            Primary Muscle Group: {exercise.muscles[0]}
          </ExerciseInfoSpan>
        </ExerciseInfo>
        <ExerciseImageContainer>
          <ExerciseImage alt={`${title}`} src={imageUrl} />
        </ExerciseImageContainer>
      </ExerciseInfoContainer>
    </ExerciseInfoCardContainer>
  );
};

export default ExerciseInfoCard;
