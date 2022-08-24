import {
  COINS_API,
  FAVORITE_DATA,
  LOADER,
  ERROR,
  FORM_INPUT,
} from "../Types/types";

//
export const coinsApiCall = (coins) => {
  return {
    type: COINS_API,
    payload: coins,
  };
};
export const favoriteDataAction = (data) => {
  return {
    type: FAVORITE_DATA,
    payload: data,
  };
};

export const Form = (eTarget) => {
  return {
    type: FORM_INPUT,
    payload: eTarget,
  };
};
