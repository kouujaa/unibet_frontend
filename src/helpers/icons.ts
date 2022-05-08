const BasketBallIcon = require("src/assets/images/basketball.png");
const FootballIcon = require("src/assets/images/football.png");
const TennisIcon = require("src/assets/images/tennis.png");
const DefaultIcon = require("src/assets/images/default.png");

export const iconBySport = (sport: string) => {
  switch (sport) {
    case "BASKETBALL":
      return BasketBallIcon;
    case "FOOTBALL":
      return FootballIcon;
    case "TENNIS":
      return TennisIcon;
    default:
      return DefaultIcon;
  }
};
