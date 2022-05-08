import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import iconBySport from "src/pages/Home/helpers/iconHelper";
import formatDate from "./helpers/formatDate";

const Slider = ({ data }) => {
  console.log({ data });
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
          <div style={{ display: "flex", marginBottom: 0, padding: 0 }}>
            <h2 style={{ color: "#efbb05" }}>{item?.liveData?.score?.home}</h2>{" "}
            <h2 style={{ color: "#efbb05" }}>-</h2>
            <h2 style={{ color: "#efbb05" }}>{item?.liveData?.score?.away}</h2>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1em",
              alignItems: "center",
            }}
          >
            <img
              src={iconBySport(item?.event?.sport)}
              alt={"sport"}
              width={20}
              height={20}
            />
            <h3 style={{ color: "#fff" }}>{item.event.homeName}</h3>
            <h3 style={{ color: "#fff" }}>-</h3>
            <h3 style={{ color: "#fff" }}>{item.event.awayName}</h3>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1em",
              alignItems: "center",
            }}
          >
            <h6 style={{ color: "#999" }}>{formatDate(item.event.start)}</h6>
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
            Place a bet
          </Button>
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;
