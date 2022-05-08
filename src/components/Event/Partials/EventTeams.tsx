import { iconBySport } from "src/helpers";
import { EventTeamsWrapper, EventTeamsTextWrapper } from "./Partials.style";

const EventTeams = ({
  homeTeam,
  awayTeam,
  sportType,
}: {
  homeTeam: string;
  awayTeam: string;
  sportType: string;
}) => {
  return (
    <EventTeamsWrapper>
      <img src={iconBySport(sportType)} alt={"sport"} width={20} height={20} />
      <EventTeamsTextWrapper>{homeTeam}</EventTeamsTextWrapper>
      <EventTeamsTextWrapper>-</EventTeamsTextWrapper>
      <EventTeamsTextWrapper>{awayTeam}</EventTeamsTextWrapper>
    </EventTeamsWrapper>
  );
};

export default EventTeams;
