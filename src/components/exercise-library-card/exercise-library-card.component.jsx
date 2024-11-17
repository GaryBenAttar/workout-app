import { useContext } from "react";
import {
  ExercisesLibraryCardContainer,
  ExerciseInfo,
  ExerciseImg,
} from "./exercise-library-card.styles";
import { RoutinesContext } from "../../contexts/routines.context";

export default function ExercisesLibraryCard({
  page,
  exercisesList,
  handleExerciseClick,
  exercise,
}) {
  const { routineExercises, setRoutineExercises } = useContext(RoutinesContext);
  const { title, muscles, imageUrl } = exercise;

  const handleOnExerciseClick = (exerciseClicked) => {
    if (page === "create-routine" || page === "workout") {
      setRoutineExercises([
        ...routineExercises,
        {
          id: Date.now(),
          title: exerciseClicked.title,
          sets: [],
        },
      ]);

      handleExerciseClick(
        exercisesList.filter(
          (exercise) => exercise.title !== exerciseClicked.title
        )
      );

      console.log(
        exercisesList.filter(
          (exercise) => exercise.title !== exerciseClicked.title
        )
      );
    } else if (page === "exercises") {
      handleExerciseClick(exerciseClicked);
    }
  };

  return (
    <ExercisesLibraryCardContainer
      onClick={() => handleOnExerciseClick(exercise)}
    >
      <ExerciseImg alt={`${title}`} src={imageUrl} />
      <ExerciseInfo>
        <span>{title}</span>
        <span>{muscles[0]}</span>
      </ExerciseInfo>
    </ExercisesLibraryCardContainer>
  );
}
