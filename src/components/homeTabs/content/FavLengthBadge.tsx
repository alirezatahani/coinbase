import React from "react";
import { useAppSelector } from "hooks/hooks";
import { Badge, FlexWrapperBadge } from "../style/HomeTabs_styles";

const FavLengthBadge = () => {
  const favoriteReducers = useAppSelector((state) => state.FavoriteReducer);
  const { favoriteCoinsUuid } = favoriteReducers;

  return (
    <FlexWrapperBadge>
      <span>Favorite Coins</span>
      <Badge>{favoriteCoinsUuid.length}</Badge>
    </FlexWrapperBadge>
  );
};

export default FavLengthBadge;
