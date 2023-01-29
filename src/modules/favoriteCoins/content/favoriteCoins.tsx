import React from "react";
import { useAppSelector } from "hooks/hooks";
import { GetCoinsData } from "@modules/getCoinsData/content/getCoinsData";
import { FavoriteCoinsProps } from "./favoriteCoins_types";
import { EmptyText } from "../style/favoriteCoins_styles";

const FavoriteCoins: React.FC<FavoriteCoinsProps> = ({
  timePeriod,
  referenceCurrencyUuid,
  currencySign,
}) => {
  const favoriteReducers = useAppSelector((state) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  const uuidsString = favoriteList
    .map((item: string, index: number) => {
      let query = "";
      if (index === 0) query = item;
      else query = `uuids[]=${item}`;
      return query;
    })
    .join("&");

  return (
    <div>
      {favoriteList.length !== 0 ? (
        favoriteList && (
          <GetCoinsData
            queries={{ uuids: uuidsString, timePeriod, referenceCurrencyUuid }}
            currencySign={currencySign}
          />
        )
      ) : (
        <EmptyText>Empty...</EmptyText>
      )}
    </div>
  );
};
export default FavoriteCoins;
