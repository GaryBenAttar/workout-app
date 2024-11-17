import { useEffect, useState } from "react";

import {
  LibrarySearchContainer,
  SearchExerciseContainer,
  SearchExerciseInput,
} from "./library-search.styles";

import exerciseBaseList from "../../exercises.json";

export default function LibrarySearch({ onSearchExercise }) {
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

  return (
    <LibrarySearchContainer>
      <span>Library</span>
      <select>
        <option>All Equipement</option>
      </select>
      <select>
        <option>All Muscles</option>
      </select>
      <SearchExerciseContainer>
        <SearchExerciseInput
          placeholder="Search Exercises"
          onChange={(event) => handleSearchExercise(event)}
          value={searchValue}
        />
      </SearchExerciseContainer>
    </LibrarySearchContainer>
  );
}
