import { useState } from "react";
import { LibraryContainer, ExercisessContainer } from "./library.styles";

import exercisesBaseList from "../../exercises.json";

import ExerciseLibraryCard from "../exercise-library-card/exercise-library-card.component";
import LibrarySearch from "../library-search/library-search.component";

export default function Library({ page, handleExerciseClick }) {
  const [exercisesList, setExercisesList] = useState(exercisesBaseList);

  const updateExercisesList = (newList) => {
    setExercisesList(newList);
  };

  const onExerciseClick = (page, exercise) => {
    if (page === "create-routine" || page === "workout") {
      updateExercisesList();
    } else if (page === "exercises") {
      handleExerciseClick(exercise);
    }
  };

  const handleSearchExercise = (value) => {
    setExercisesList(value);
  };

  return (
    <LibraryContainer>
      <LibrarySearch
        onSearchExercise={handleSearchExercise}
        exerciseList={exercisesList}
      />
      <ExercisessContainer>
        <span>Exercises</span>
        {exercisesList.map((exercise) => (
          <ExerciseLibraryCard
            exercise={exercise}
            key={exercise.title}
            page={page}
            exercisesList={exercisesList}
            handleExerciseClick={() => onExerciseClick(exercise)}
          />
        ))}
      </ExercisessContainer>
    </LibraryContainer>
  );
}
