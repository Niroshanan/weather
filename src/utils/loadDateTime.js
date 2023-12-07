import {
  LOCALE_EN_US_LABEL,
  NUMERIC_LABEL,
  SHORT_LABEL,
} from "../constants/utilConstant";

const dateOptions = {
  month: SHORT_LABEL,
  day: NUMERIC_LABEL,
};
const timeOptions = {
  hour: NUMERIC_LABEL,
  minute: NUMERIC_LABEL,
  hour12: true,
};
export const formatDate = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);

  const formattedTime = dateObj
    .toLocaleString(LOCALE_EN_US_LABEL, timeOptions)
    .toString();
  const formattedDate = dateObj
    .toLocaleString(LOCALE_EN_US_LABEL, dateOptions)
    .toString();

  return `${formattedTime}, ${formattedDate}`;
};

export const formatSunTime = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);

  return dateObj.toLocaleString(LOCALE_EN_US_LABEL, timeOptions).toString();
};
