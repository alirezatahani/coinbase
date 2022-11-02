import React from "react";
import { useSelector } from "react-redux";
import { CoinList } from "@components/coinsList/index"

export default function FavoriteCoins() {
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  return (
    <div>
      {favoriteList.length !== 0 ? (
        favoriteList && <CoinList data={favoriteList} />
      ) : (
        <p style={{ color: "white" }}>Empty...</p>
      )}
    </div>
  );
}
