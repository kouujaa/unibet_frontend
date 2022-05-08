import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";

let BasketBallIcon = require("src/assets/images/basketball.png");
let FootballIcon = require("src/assets/images/football.png");
let TennisIcon = require("src/assets/images/tennis.png");
let DefaultIcon = require("src/assets/images/default.png");
let UnibetLogo = require("src/assets/images/unibet-logo.png");

const Slider = ({ data }) => {
  return (
    <Carousel
      autoPlay
      indicators={false}
      interval={3000}
      swipe={false}
      animation={"slide"}
    >
      {data?.liveEvents?.map((item, i) => (
        <div
          key={item.liveData.eventId}
          style={{
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222",
          }}
        >
          <div style={{ display: "flex" }}>
            <h4 style={{ color: "#efbb05" }}>{item?.liveData?.score?.home}</h4>{" "}
            <h4 style={{ color: "#efbb05" }}>-</h4>
            <h4 style={{ color: "#efbb05" }}>{item?.liveData?.score?.away}</h4>
          </div>
          <div style={{ display: "flex", gap: "1em" }}>
            <h2 style={{ color: "#fff" }}>{item.event.homeName}</h2>
            <h2 style={{ color: "#fff" }}>-</h2>
            <h2 style={{ color: "#fff" }}>{item.event.awayName}</h2>
          </div>
          <Button
            onClick={() => {
              window.open(
                `https://www.unibet.com/betting#/event/live/${item.liveData.eventId}`,
                "_blank"
              );
            }}
            style={{ backgroundColor: "#3aaa35", color: "#fff" }}
          >
            Place a bet!
          </Button>
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;
