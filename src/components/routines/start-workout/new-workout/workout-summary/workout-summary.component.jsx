import React from "react";
import {
  WorkoutSummaryContainer,
  WorkoutSummaryHeadingSpan,
  WorkoutSummarySpan,
  WorkoutSummaryContent,
} from "./workout-summary.styles";

const WorkoutSummary = ({ duration, volume, setsDone }) => {
  return (
    <WorkoutSummaryContainer>
      <WorkoutSummaryContent>
        <WorkoutSummaryHeadingSpan>Duration</WorkoutSummaryHeadingSpan>
        <WorkoutSummarySpan>{duration}</WorkoutSummarySpan>
      </WorkoutSummaryContent>
      <WorkoutSummaryContent>
        <WorkoutSummaryHeadingSpan>Weight (kg)</WorkoutSummaryHeadingSpan>
        <WorkoutSummarySpan>{volume}</WorkoutSummarySpan>
      </WorkoutSummaryContent>
      <WorkoutSummaryContent>
        <WorkoutSummaryHeadingSpan>Sets</WorkoutSummaryHeadingSpan>
        <WorkoutSummarySpan>{setsDone}</WorkoutSummarySpan>
      </WorkoutSummaryContent>
    </WorkoutSummaryContainer>
  );
};

export default WorkoutSummary;
