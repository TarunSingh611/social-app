// dateUtils.js
import moment from "moment";

// Helper function to check if two timestamps are on the same day
export const isSameDay = (timestamp1:any, timestamp2:any) => {
  const moment1 = moment(timestamp1);
  const moment2 = moment(timestamp2);
  return moment1.isSame(moment2, "day");
};

// Helper function to format the date
export const formatDate = (timestamp:any) => {
  return moment(timestamp).format("MMMM DD, YYYY");
};
