import * as React from "react";
import {
  CoinContent,
  CoinDesc,
  CoinListContainer,
  CoinName,
} from "../styles/coinListContainer_style";
import { CoinPriceSection } from "./CoinPrice";
import { CoinPriceChangeSection } from "./CoinChangePrice";
import { AddToFavoriteSection } from "./AddToFavorite";
import { CoinListProps, CoinProps } from "../types/coinList_types";
import { Spin } from "antd";

export const CoinList: React.FC<CoinListProps> = ({ data, loading }) => {
  return (
    <CoinListContainer>
      {loading ? (
        <Spin />
      ) : (
        data &&
        data.map((coin: CoinProps) => {
          const { change, iconUrl, name, price, uuid } = coin;
          return (
            <CoinContent key={uuid}>
              <CoinDesc>
                <img src={iconUrl} style={{ width: 40 }} />
                <CoinName> {name}</CoinName>
              </CoinDesc>
              <CoinPriceSection price={price} />
              <CoinPriceChangeSection priceChange={change} />
              <AddToFavoriteSection coin={coin} />
            </CoinContent>
          );
        })
      )}
    </CoinListContainer>
  );
};
