import React from "react";
import { useAppSelector } from "hooks/hooks";
import { GetCoinsData } from "@modules/getCoinsData/content/getCoinsData";
import { EmptyText } from "../style/favoriteCoins_styles";

const FavoriteCoins = () => {
  const { favoriteCoinsUuid } = useAppSelector(
    (state) => state.FavoriteReducer
  );
  const { sign, value } = useAppSelector((state) => state.referenceCurrency);
  const timePeriod = useAppSelector((state) => state.timePeriod.timePeriod);

  const uuidsString = favoriteCoinsUuid
    .map((item: string, index: number) => {
      let query = "";
      if (index === 0) query = item;
      else query = `uuids[]=${item}`;
      return query;
    })
    .join("&");

  return (
    <div>
      {favoriteCoinsUuid.length !== 0 ? (
        favoriteCoinsUuid && (
          <GetCoinsData
            queries={{
              uuids: uuidsString,
              timePeriod,
              referenceCurrencyUuid: value,
            }}
            currencySign={sign}
          />
        )
      ) : (
        <EmptyText>Empty...</EmptyText>
      )}
    </div>
  );
};
export default FavoriteCoins;
