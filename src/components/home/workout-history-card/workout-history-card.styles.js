import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const WorkoutHistoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 0.9rem;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};
`;

export const WourkoutNameSpan = styled.span``;

export const StyledIcon = styled(FontAwesomeIcon)``;

export const WorkoutDurationAndVolume = styled.div`
  display: flex;
  gap: 30px;
`;

export const WorkoutDetails = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const WorkoutDetailsHeading = styled.h3`
  color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.color.grey
      : props.theme.color.lightGrey};

  margin: 0px;
  font-size: 0.8rem;
`;

export const WorkoutDetailsSpan = styled.span``;

export const WorkoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-bottom: ${(props) => props.theme.borders};
  padding: 20px;
`;
