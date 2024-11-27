import { useEffect, useState } from "react";

import {
  LibrarySearchContainer,
  LibrarySearchHeading,
  LibrarySearchOption,
  LibrarySearchSelect,
  SearchExerciseContainer,
  SearchExerciseInput,
} from "./library-search.styles";
import { useSearchExercise } from "./hooks/useSearchExercise.hook";

const LibrarySearch = ({ onSearchExercise }) => {
  const { searchValue, handleSearchExercise } =
    useSearchExercise(onSearchExercise);

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
