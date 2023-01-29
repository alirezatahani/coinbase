import { ADD_TO_FAVORITE } from "@redux/favoriteCoins/favoriteTypes";

const initialState:{favoriteList:string[]} = {
  favoriteList:[],
};

export const favoriteReducer = (state = initialState, action:{type:string,payload:string}) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
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
