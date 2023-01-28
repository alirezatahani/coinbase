import { CHANGE_REFERENCE_CURRENCY } from "./referenceCurrencyTypes";

const initialState = {
  value: "yhjMzLPhuIDl",
  sign: "$",
  label: "USD",
};
export const referenceCurrencyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_REFERENCE_CURRENCY:
      return {
        ...state,
        value: action.payload.value,
        sign: action.payload.sign,
        label: action.payload.label,
      };
    default:
      return state;
  }
};
