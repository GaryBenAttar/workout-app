import { useEffect, useState } from "react";

import exerciseBaseList from "../../../../exercises.json";

export const useSearchExercise = (onSearchExercise) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchExercise = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    onSearchExercise([
      ...exerciseBaseList.filter((exercise) =>
        exercise.title.toLowerCase().includes(searchValue)
      ),
    ]);
  }, [searchValue]);

  return { searchValue, handleSearchExercise };
};
