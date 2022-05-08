import format from "date-fns/format";
import isToday from "date-fns/isToday";

export const formatDate = (date: string): string => {
  const dateObject = new Date(date);
  if (isToday(dateObject)) {
    return "Today, " + format(dateObject, "HH:mm");
  }
  return format(dateObject, "y-MMM-d");
};
