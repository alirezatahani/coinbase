import { ADD_TO_FAVORITE } from "./favoriteTypes";


export const FavoriteActionHandler = (uuid :string) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: uuid,
  };
};
