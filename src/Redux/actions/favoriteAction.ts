import { FavoriteAction } from "@redux/types/types";

export const FavoriteActionHandler = (item: any) => {
  return {
    type: FavoriteAction,
    payload: item,
  };
};
