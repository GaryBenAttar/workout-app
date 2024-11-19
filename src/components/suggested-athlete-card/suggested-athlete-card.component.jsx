import React from "react";
import {
  SuggestedAthleteCardContainer,
  SuggestedAthleteImage,
  SuggestedAthleteName,
  SuggestedAthleteNameSpan,
} from "./suggested-athlete-card.styles";

const SuggestedAthleteCard = () => {
  return (
    <SuggestedAthleteCardContainer>
      <SuggestedAthleteImage alt="athlete" />
      <SuggestedAthleteName>
        <SuggestedAthleteNameSpan>Username</SuggestedAthleteNameSpan>
        <SuggestedAthleteNameSpan>Full Name</SuggestedAthleteNameSpan>
      </SuggestedAthleteName>
    </SuggestedAthleteCardContainer>
  );
};

export default SuggestedAthleteCard;
