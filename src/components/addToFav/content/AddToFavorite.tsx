import * as React from "react";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { FavBtn } from "../style/addToFavorite_style";
import { FavoriteActionHandler } from "@redux/actions/favoriteAction";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { AddToFavProps } from "./addToFav_type";

export const AddToFavoriteSection: React.FC<AddToFavProps> = ({uuid}) => {
  const { favoriteList } = useAppSelector((state) => state.FavoriteReducer);
  const dispatch = useAppDispatch();
 
  const favoriteAction = () => {
    dispatch(FavoriteActionHandler(uuid));
  };
  
  return (
    <FavBtn onClick={() => favoriteAction()}>
      {favoriteList.some((item: {}) => uuid === item) ? (
        <StarFilled />
      ) : (
        <StarOutlined />
      )}
    </FavBtn>
  );
};
