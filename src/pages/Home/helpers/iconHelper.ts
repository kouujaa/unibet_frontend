const BasketBallIcon = require("src/assets/images/basketball.png");
const FootballIcon = require("src/assets/images/football.png");
const TennisIcon = require("src/assets/images/tennis.png");
const DefaultIcon = require("src/assets/images/default.png");
// const UnibetLogo = require("src/assets/images/unibet-logo.png");

const iconBySport = (sport: string) => {
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

export default iconBySport;
