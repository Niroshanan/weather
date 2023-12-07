import { BLUE, GREEN, ORANGE, PURPLE, RED } from "../constants/utilConstant";

export const getCardBgColour = (index) => {
  let bgindex = index % 5;
  let cardBackgroundColor;
  if (bgindex % 5 == 0) {
    cardBackgroundColor = BLUE;
  } else if (bgindex % 5 == 1) {
    cardBackgroundColor = PURPLE;
  } else if (bgindex % 5 == 2) {
    cardBackgroundColor = GREEN;
  } else if (bgindex % 5 == 3) {
    cardBackgroundColor = ORANGE;
  } else if (bgindex % 5 == 4) {
    cardBackgroundColor = RED;
  }
  return cardBackgroundColor;
};
