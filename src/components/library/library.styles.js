import styled from "styled-components";

export const LibraryContainer = styled.div`
  background-color: ${(props) => props.theme.color.sectionBackground};
  width: 250px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;
`;

export const ExercisesContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export const ExercisesHeading = styled.h3``;
