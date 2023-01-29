import { FavoriteAction } from "@redux/favoriteCoins/types";

export const FavoriteActionHandler = (item: any) => {
  return {
    type: FavoriteAction,
    payload: item,
  };
};
