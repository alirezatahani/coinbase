import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavBtn } from "../styles/addToFavorite_style";
import { FavoriteActionHandler } from "@redux/actions/favoriteAction";
import { StarOutlined, StarFilled } from "@ant-design/icons";

export const AddToFavoriteSection = ({ props }: any) => {
  const coin = props;
  const dispatch = useDispatch();
  const favoriteAction = (coin: {
    iconUrl: string;
    name: string;
    price: string;
  }) => {
    dispatch(FavoriteActionHandler(coin));
  };
  const { favoriteList } = useSelector((state: any) => state.FavoriteReducer);
  return (
    <FavBtn onClick={() => favoriteAction(coin)}>
      {favoriteList.some((item: any) => coin.name === item.name) ? (
        <StarFilled />
      ) : (
        <StarOutlined />
      )}
    </FavBtn>
  );
};
