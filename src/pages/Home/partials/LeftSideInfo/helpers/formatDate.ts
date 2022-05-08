import isToday from "date-fns/isToday";
import format from "date-fns/format";

const formatDate = (date: string): string => {
  const dateObject = new Date(date);
  if (isToday(dateObject)) {
    return "Today, " + format(dateObject, "HH:mm");
  }
  return format(dateObject, "ddd, MMM D, HH:mm");
};

export default formatDate;
