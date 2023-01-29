import { FavoriteAction } from "@redux/favoriteCoins/types";

const initialState = {
  favoriteList: <any[]>[],
};

export const favoriteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FavoriteAction:
      const favoriteCoinIndex = state.favoriteList.findIndex(
        (item) => item == action.payload
      );

      if (favoriteCoinIndex < 0) {
        return {
          ...state,
          favoriteList: [...state.favoriteList, action.payload],
        };
      } else {
        const newArray = state.favoriteList.filter(
          (item) => item !== action.payload
        );

        return {
          ...state,
          favoriteList: newArray,
        };
      }
    default:
      return state;
  }
};
