import {
  ExercisesLibraryCardContainer,
  ExerciseInfo,
  ExerciseImg,
  ExerciseInfoSpan,
} from "./exercise-library-card.styles";

const ExercisesLibraryCard = ({ handleExerciseClick, exercise }) => {
  const { title, muscles, imageUrl } = exercise;

  return (
    <ExercisesLibraryCardContainer
      onClick={() => handleExerciseClick(exercise)}
    >
      <ExerciseImg alt={`${title}`} src={imageUrl} />
      <ExerciseInfo>
        <ExerciseInfoSpan>{title}</ExerciseInfoSpan>
        <ExerciseInfoSpan>{muscles[0]}</ExerciseInfoSpan>
      </ExerciseInfo>
    </ExercisesLibraryCardContainer>
  );
};

export default ExercisesLibraryCard;
