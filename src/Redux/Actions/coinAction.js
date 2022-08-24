import { COINS_API, LOADER, ERROR, FORM_INPUT } from "../Types/types";

//
export const coinsApiCall = (coins) => {
  return {
    type: COINS_API,
    payload: coins,
  };
};

export const Form = (eTarget) => {
  return {
    type: FORM_INPUT,
    payload: eTarget,
  };
};

export const LoaderFunc = () => {
  return { type: LOADER };
};
