import { FavoriteAction } from "./../types/types";

export const FavoriteActionHandler = (item: any) => {
  return {
    type: FavoriteAction,
    payload: item,
  };
};
