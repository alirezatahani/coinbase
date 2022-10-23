import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToFavoriteProps } from "../types/addToFavorite_types";
import { FavBtn } from "../styles/addToFavorite_style";
import { FavoriteActionHandler } from "@redux/actions/favoriteAction";
import { StarOutlined, StarFilled } from "@ant-design/icons";

export const AddToFavoriteSection: React.FC<AddToFavoriteProps> = ({coin}) => {
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
