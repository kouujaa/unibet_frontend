import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react";

const useLiveData = () => {
  const [group, setGroup] = useState<any>();
  const [liveEvents, setLiveEvents] = useState<any>();
  useEffect(() => {
    fetchJsonp(
      "http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log("parsed json", json);
        setLiveEvents(json.liveEvents);
        setGroup(json.group);
      })
      .catch(function (ex) {
        console.log("parsing failed", ex);
      });
  }, []);

  return {
    group,
    liveEvents,
  };
};

export default useLiveData;
