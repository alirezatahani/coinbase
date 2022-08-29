import { COINS_API, FAVORITE_DATA, ERROR } from "../Types/types";

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

export const ErrorAction = (error) => {
  return { type: ERROR, payload: error };
};
