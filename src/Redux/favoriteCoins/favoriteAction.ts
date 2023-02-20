import { CoinInterface } from "types";
import { ADD_TO_FAVORITE } from "./favoriteTypes";


export const FavoriteActionHandler = (coin:CoinInterface) => {
  
  return {
    type: ADD_TO_FAVORITE,
    payload: coin,
  };
};
