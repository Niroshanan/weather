const dateOptions = {
  month: "short",
  day: "numeric",
};
const timeOptions = {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};
export const formatDate = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);

  const formattedTime = dateObj.toLocaleString("en-US", timeOptions).toString();
  const formattedDate = dateObj.toLocaleString("en-US", dateOptions).toString();

  return `${formattedTime}, ${formattedDate}`;
};

export const formatSunTime = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);

  return dateObj.toLocaleString("en-US", timeOptions).toString();
};
