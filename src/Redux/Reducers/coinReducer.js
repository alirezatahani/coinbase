import { COINS_API, FORM_INPUT, LOADER, ERROR } from "../Types/types";

const initialState = {
  coinsData: [],
  formInput: "",
  loading: false,
  error: "",
};

export const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case COINS_API:
      return { ...state, coinsData: action.payload, loading: false };
    case FORM_INPUT:
      return { ...state, formInput: action.payload };
    case LOADER:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false, coinsData: [] };
    default:
      return state;
  }
};
