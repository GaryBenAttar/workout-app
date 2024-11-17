import SuggestedAthleteCard from "../suggested-athlete-card/suggested-athlete-card.component";
import { SuggestedAthletesContainer } from "./suggested-athletes.styles";

export default function SuggestedAthletes() {
  return (
    <SuggestedAthletesContainer>
      <h2>Suggested Athletes</h2>
      <SuggestedAthleteCard />
    </SuggestedAthletesContainer>
  );
}
