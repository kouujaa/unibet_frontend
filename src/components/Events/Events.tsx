import Carousel from "react-material-ui-carousel";
import Event from "../Event/Event";
const Events = ({ data }) => {
  return (
    <Carousel
      autoPlay
      indicators={false}
      interval={3000}
      swipe={false}
      animation="slide"
    >
      {data?.liveEvents?.map((item) => (
        <Event key={item.liveData.eventId} data={item} />
      ))}
    </Carousel>
  );
};

export default Events;
