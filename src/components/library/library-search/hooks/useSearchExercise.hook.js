import { useEffect, useState } from "react";

export const useSearchExercise = (onSearchExercise, exercisesBaseList) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchExercise = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    onSearchExercise([
      ...exercisesBaseList.filter((exercise) =>
        exercise.title.toLowerCase().includes(searchValue)
      ),
    ]);
  }, [searchValue]);

  return { searchValue, handleSearchExercise };
};
