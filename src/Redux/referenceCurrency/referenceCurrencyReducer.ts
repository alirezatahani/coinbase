import { CHANGE_REFERENCE_CURRENCY } from "./referenceCurrencyTypes";

const initialState = {
  value: "yhjMzLPhuIDl",
  sign: "$",
};
export const referenceCurrencyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_REFERENCE_CURRENCY:
      return {
        ...state,
        value: action.payload.value,
        sign: action.payload.sign,
      };
    default:
      return state;
  }
};
