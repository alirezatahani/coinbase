import { CHANGE_REFERENCE_CURRENCY } from "./referenceCurrencyTypes";

export const changeReferenceCurrency = (payload: {value:string,sign?:string}) => {
  return {
    type: CHANGE_REFERENCE_CURRENCY,
    payload: payload,
  };
};
