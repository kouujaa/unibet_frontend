import React from "react";
import { formatDate } from "src/helpers";
import { EventTimeWrapper, EventTimeTextWrapper } from "./Partials.style";
const EventTime = ({ startTime }: { startTime: string }) => {
  return (
    <EventTimeWrapper>
      <EventTimeTextWrapper>{formatDate(startTime)}</EventTimeTextWrapper>
    </EventTimeWrapper>
  );
};

export default EventTime;
