import { useEffect, useRef, useState } from "react";
import {
  LibraryContainer,
  ExercisesContainer,
  ExercisesHeading,
} from "./library.styles";

import ExerciseLibraryCard from "./exercise-library-card/exercise-library-card.component";
import LibrarySearch from "./library-search/library-search.component";
import { fetchData } from "../../utils/firebase.utils";

const Library = ({ handleExerciseClick }) => {
  const [exercisesList, setExercisesList] = useState([]);

  useEffect(() => {
    fetchData("exercises")
      .then((response) => response)
      .then((result) => setExercisesList(result))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchExercise = (value) => {
    // look for search with debounce
    setExercisesList(value);
  };

  return (
    <LibraryContainer>
      <LibrarySearch
        onSearchExercise={handleSearchExercise}
        exercisesList={exercisesList}
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
