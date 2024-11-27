import {
  LibrarySearchContainer,
  LibrarySearchHeading,
  LibrarySearchOption,
  LibrarySearchSelect,
  SearchExerciseContainer,
  SearchExerciseInput,
} from "./library-search.styles";
import { useSearchExercise } from "./hooks/useSearchExercise.hook";

const LibrarySearch = ({ onSearchExercise, exercisesList }) => {
  const { searchValue, handleSearchExercise } = useSearchExercise(
    onSearchExercise,
    exercisesList
  );

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
