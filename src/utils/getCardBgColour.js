export const getCardBgColour = (index) => {
  let bgindex = index % 5;
  let cardBackgroundColor;
  if (bgindex % 5 == 0) {
    cardBackgroundColor = "bg-blue-500";
  } else if (bgindex % 5 == 1) {
    cardBackgroundColor = "bg-purple-500";
  } else if (bgindex % 5 == 2) {
    cardBackgroundColor = "bg-green-500";
  } else if (bgindex % 5 == 3) {
    cardBackgroundColor = "bg-orange-500";
  } else if (bgindex % 5 == 4) {
    cardBackgroundColor = "bg-red-500";
  }
  return cardBackgroundColor;
};
