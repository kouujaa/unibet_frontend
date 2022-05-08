import { EventScoreTextWrapper, EventScoreWrapper } from "./Partials.style";

const EventScores = ({
  homeTeamScore,
  awayTeamScore,
}: {
  homeTeamScore: string;
  awayTeamScore: string;
}) => {
  return (
    <EventScoreWrapper>
      <EventScoreTextWrapper>{homeTeamScore}</EventScoreTextWrapper>
      <EventScoreTextWrapper>-</EventScoreTextWrapper>
      <EventScoreTextWrapper>{awayTeamScore}</EventScoreTextWrapper>
    </EventScoreWrapper>
  );
};

export default EventScores;
