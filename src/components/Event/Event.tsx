import { EventWrapper, PlaceBetButtonWrapper } from "./Event.style";
import EventScores from "./Partials/EventScores";
import EventTeams from "./Partials/EventTeams";
import EventTime from "./Partials/EventTime";

const Event = ({ data }) => {
  console.log({ data });
  return (
    <EventWrapper key={data.liveData.eventId}>
      <EventScores
        homeTeamScore={data?.liveData?.score?.home}
        awayTeamScore={data?.liveData?.score?.away}
      />
      <EventTeams
        homeTeam={data.event.homeName}
        awayTeam={data.event.awayName}
        sportType={data.event.sport}
      />
      <EventTime startTime={data.event.start} />
      <PlaceBetButtonWrapper
        onClick={() => {
          window.open(
            `https://www.unibet.com/betting#/event/live/${data.liveData.eventId}`,
            "_blank"
          );
        }}
      >
        Place a bet
      </PlaceBetButtonWrapper>
    </EventWrapper>
  );
};
export default Event;
