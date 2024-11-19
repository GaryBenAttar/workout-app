import SuggestedAthleteCard from "../suggested-athlete-card/suggested-athlete-card.component";
import {
  SuggestedAthletesContainer,
  SuggestedAthletesHeading,
} from "./suggested-athletes.styles";

const SuggestedAthletes = () => {
  return (
    <SuggestedAthletesContainer>
      <SuggestedAthletesHeading>Suggested Athletes</SuggestedAthletesHeading>
      <SuggestedAthleteCard />
    </SuggestedAthletesContainer>
  );
};

export default SuggestedAthletes;
