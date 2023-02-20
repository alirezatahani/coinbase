import * as React from "react";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { FavBtn } from "../style/addToFavorite_style";
import { FavoriteActionHandler } from "@redux/favoriteCoins/favoriteAction";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { CoinInterface } from "types";

export const AddToFavoriteSection = ({...props}) => {
  const { favoriteCoinsUuid } = useAppSelector((state) => state.FavoriteReducer);
  const dispatch = useAppDispatch();
 
  const favoriteAction = () => {
    dispatch(FavoriteActionHandler(props as CoinInterface));
  };

  return (
    <FavBtn onClick={() => favoriteAction()}>
      {favoriteCoinsUuid.some((item: {}) => props.uuid === item) ? (
        <StarFilled />
      ) : (
        <StarOutlined />
      )}
    </FavBtn>
  );
};
