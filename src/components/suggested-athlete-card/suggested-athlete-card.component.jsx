import React from "react";
import {
  SuggestedAthleteCardContainer,
  SuggestedAthleteName,
} from "./suggested-athlete-card.styles";

export default function SuggestedAthleteCard() {
  return (
    <SuggestedAthleteCardContainer>
      <img alt="athlete" />
      <SuggestedAthleteName>
        <span>Username</span>
        <span>Full Name</span>
      </SuggestedAthleteName>
    </SuggestedAthleteCardContainer>
  );
}
