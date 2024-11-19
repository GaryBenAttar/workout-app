import styled from "styled-components";

export const SuggestedAthletesContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.color.sectionBackground};

  padding: 20px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;
`;

export const SuggestedAthletesHeading = styled.h2``;
