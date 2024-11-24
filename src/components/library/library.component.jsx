import { useState } from "react";
import {
  LibraryContainer,
  ExercisesContainer,
  ExercisesHeading,
} from "./library.styles";

import exercisesBaseList from "../../exercises.json";

import ExerciseLibraryCard from "./exercise-library-card/exercise-library-card.component";
import LibrarySearch from "./library-search/library-search.component";

const Library = ({ handleExerciseClick }) => {
  const [exercisesList, setExercisesList] = useState(exercisesBaseList);

  const handleSearchExercise = (value) => {
    // look for search with debounce
    setExercisesList(value);
  };

  return (
    <LibraryContainer>
      <LibrarySearch
        onSearchExercise={handleSearchExercise}
        exerciseList={exercisesList}
      />
      <ExercisesContainer>
        <ExercisesHeading>Exercises</ExercisesHeading>
        {exercisesList.map((exercise) => (
          <ExerciseLibraryCard
            exercise={exercise}
            key={exercise.title}
            exercisesList={exercisesList}
            handleExerciseClick={handleExerciseClick}
          />
        ))}
      </ExercisesContainer>
    </LibraryContainer>
  );
};

export default Library;
