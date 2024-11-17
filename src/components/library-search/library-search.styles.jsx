import styled from "styled-components";

export const LibrarySearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: ${(props) => props.theme.borders};
  padding: 20px;

  select {
    padding: 5px;
    border: ${(props) => props.theme.borders};
    border-radius: 8px;

    background-color: ${(props) => props.theme.color.select};
    color: ${(props) => props.theme.color.textMain};
  }
`;

export const SearchExerciseContainer = styled.div`
  padding: 8px;

  background-color: ${(props) => props.theme.color.input};

  margin-bottom: 15px;
  border-radius: 8px;
`;

export const SearchExerciseInput = styled.input`
  border: none;
  background-color: ${(props) => props.theme.color.input};
  &:focus {
    outline: none;
  }
  &::before {
  }
`;
