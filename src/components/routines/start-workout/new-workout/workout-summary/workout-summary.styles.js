import styled from "styled-components";

export const WorkoutSummaryContainer = styled.div`
  position: sticky;
  top: 0;
  width: inherit;

  display: flex;
  justify-content: space-between;
  padding: 10px;

  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const WorkoutSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  text-align: center;
`;

export const WorkoutSummaryHeadingSpan = styled.span`
  font-weight: 600;
  font-size: small;

  color: ${(props) => props.theme.color.grey};
`;

export const WorkoutSummarySpan = styled.span``;
