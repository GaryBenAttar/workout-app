import styled from "styled-components";

export const ExercisesLibraryCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 5px;

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
  }
`;

export const ExerciseImg = styled.img`
  height: 50px;
  width: 50px;

  border-radius: 50%;
`;
export const ExerciseInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
