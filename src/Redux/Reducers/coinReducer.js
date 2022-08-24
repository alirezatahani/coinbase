import { COINS_API, FAVORITE_DATA, ERROR } from "../Types/types";

const initialState = {
  coinsData: [],
  favoriteData: [],
  loading: false,
  error: "",
};

export const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case COINS_API:
      return { ...state, coinsData: action.payload, loading: false };
    case FAVORITE_DATA:
      return {
        ...state,
        favoriteData: [...state.favoriteData, action.payload],
        loading: false,
      };
    case ERROR:
      return { ...state, error: action.payload, loading: false, coinsData: [] };
    default:
      return state;
  }
};
