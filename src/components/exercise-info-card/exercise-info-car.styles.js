import styled from "styled-components";

export const ExerciseInfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ExerciseInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExerciseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 0.8rem;
`;

export const ExerciseInfoHeading = styled.h2``;
export const ExerciseInfoSpan = styled.h2``;

export const ExerciseImageContainer = styled.div`
  display: flex;
  justify-content: center;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;
  height: 250px;
  width: 400px;
`;

export const ExerciseImage = styled.img`
  align-self: center;

  border-radius: 50%;
  height: 200px;
`;
