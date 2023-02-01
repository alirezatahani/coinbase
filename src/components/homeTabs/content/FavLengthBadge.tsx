import React from "react";
import { useAppSelector } from "hooks/hooks";
import { Badge, FlexWrapperBadge } from "../style/HomeTabs_styles";

const FavLengthBadge = () => {
  const favoriteReducers = useAppSelector((state) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  return (
    <FlexWrapperBadge>
      <span>Favorite Coins</span>
      <Badge>{favoriteList.length}</Badge>
    </FlexWrapperBadge>
  );
};

export default FavLengthBadge;
