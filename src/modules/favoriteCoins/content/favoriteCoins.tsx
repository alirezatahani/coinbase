import React from "react";
import { useSelector } from "react-redux";
import { GetCoinsData } from "@modules/getCoinsData/content/getCoinsData";
import { FavoriteCoinsProps } from "./favoriteCoins_types";

const FavoriteCoins: React.FC<FavoriteCoinsProps> = ({ timePeriod }) => {
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
          <GetCoinsData queries={{ uuids: uuidsString, timePeriod }} />
        )
      ) : (
        <p style={{ color: "white" }}>Empty...</p>
      )}
    </div>
  );
};
export default FavoriteCoins;
