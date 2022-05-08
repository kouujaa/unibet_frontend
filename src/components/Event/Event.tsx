import { Button } from "@mui/material";
import iconBySport from "src/pages/Home/helpers/iconHelper";
import formatDate from "../../pages/Home/partials/LeftSideInfo/helpers/formatDate";

const EventTime = ({ startTime }: { startTime: string }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1em",
        alignItems: "center",
      }}
    >
      <h6 style={{ color: "#999" }}>{formatDate(startTime)}</h6>
    </div>
  );
};

const EventScores = ({
  homeTeamScore,
  awayTeamScore,
}: {
  homeTeamScore: string;
  awayTeamScore: string;
}) => {
  return (
    <div style={{ display: "flex", marginBottom: 0, padding: 0 }}>
      <h2 style={{ color: "#efbb05" }}>{homeTeamScore}</h2>
      <h2 style={{ color: "#efbb05" }}>-</h2>
      <h2 style={{ color: "#efbb05" }}>{awayTeamScore}</h2>
    </div>
  );
};

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
    <div
      style={{
        display: "flex",
        gap: "1em",
        alignItems: "center",
      }}
    >
      <img src={iconBySport(sportType)} alt={"sport"} width={20} height={20} />
      <h3 style={{ color: "#fff", textOverflow: "ellipsis" }}>{homeTeam}</h3>
      <h3 style={{ color: "#fff" }}>-</h3>
      <h3 style={{ color: "#fff" }}>{awayTeam}</h3>
    </div>
  );
};

const Event = ({ data }) => {
  console.log({ data });
  return (
    <div
      key={data.liveData.eventId}
      style={{
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        paddingBottom: "40px",
        paddingTop: "30px",
      }}
    >
      <EventScores
        homeTeamScore={data?.liveData?.score?.home}
        awayTeamScore={data?.liveData?.score?.away}
      />
      <EventTeams
        homeTeam={data.event.homeName}
        awayTeam={data.event.awayName}
        sportType={data.event.sportType}
      />
      <EventTime startTime={data.event.start} />
      <Button
        onClick={() => {
          window.open(
            `https://www.unibet.com/betting#/event/live/${data.liveData.eventId}`,
            "_blank"
          );
        }}
        style={{ backgroundColor: "#3aaa35", color: "#fff" }}
      >
        Place a bet
      </Button>
    </div>
  );
};
export default Event;
