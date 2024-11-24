import { useEffect, useState } from "react";

import {
  LibrarySearchContainer,
  LibrarySearchHeading,
  LibrarySearchOption,
  LibrarySearchSelect,
  SearchExerciseContainer,
  SearchExerciseInput,
} from "./library-search.styles";

import exerciseBaseList from "../../../exercises.json";

const LibrarySearch = ({ onSearchExercise }) => {
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
      <LibrarySearchHeading>Library</LibrarySearchHeading>
      <LibrarySearchSelect>
        <LibrarySearchOption>All Equipement</LibrarySearchOption>
      </LibrarySearchSelect>
      <LibrarySearchSelect>
        <LibrarySearchOption>All Muscles</LibrarySearchOption>
      </LibrarySearchSelect>
      <SearchExerciseContainer>
        <SearchExerciseInput
          placeholder="Search Exercises"
          onChange={(event) => handleSearchExercise(event)}
          value={searchValue}
        />
      </SearchExerciseContainer>
    </LibrarySearchContainer>
  );
};

export default LibrarySearch;
