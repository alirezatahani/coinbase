import React from "react";
import { useSelector } from "react-redux";
import { GetCoinsData } from "@modules/getCoinsData/content/getCoinsData";
import { FavoriteCoinsProps } from "./favoriteCoins_types";
import { EmptyText } from "../style/favoriteCoins_styles";

const FavoriteCoins: React.FC<FavoriteCoinsProps> = ({
  timePeriod,
  referenceCurrencyUuid,
  currencySign,
}) => {
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
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
