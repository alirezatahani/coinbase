import React from "react";
import { Badge, FlexWrapperBadge } from "../style/HomeTabs_styles";
import { useSelector } from "react-redux";

const FavLengthBadge = () => {
  const favoriteReducers = useSelector((state:any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  return (
    <FlexWrapperBadge>
      <span>Favorite Coins</span>
      <Badge>{favoriteList.length}</Badge>
    </FlexWrapperBadge>
  );
};

export default FavLengthBadge;
