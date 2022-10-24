import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavBtn } from "../style/addToFavorite_style";
import { FavoriteActionHandler } from "@redux/actions/favoriteAction";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { CoinInterface } from "types";

export const AddToFavoriteSection: React.FC<CoinInterface> = ({coin}) => {
  const { favoriteList } = useSelector((state: any) => state.FavoriteReducer);
  const dispatch = useDispatch();

  const favoriteAction = () => {
    dispatch(FavoriteActionHandler(coin));
  };
  
  return (
    <FavBtn onClick={() => favoriteAction()}>
      {favoriteList.some((item: any) => coin.name === item.name) ? (
        <StarFilled />
      ) : (
        <StarOutlined />
      )}
    </FavBtn>
  );
};