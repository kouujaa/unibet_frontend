import fetchJsonp from "fetch-jsonp";
import { useQuery } from "react-query";
import Events from "src/components/Events/Events";

const EventContainer = () => {
  const fetchUnibetGames = async () => {
    const response = await fetchJsonp(
      "http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a"
    );
    return await response.json();
  };

  const { data, isLoading, error } = useQuery("unibet_games", fetchUnibetGames);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }
  return <Events data={data} />;
};

export default EventContainer;
