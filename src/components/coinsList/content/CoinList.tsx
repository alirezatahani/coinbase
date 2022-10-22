import * as React from "react";
import Spinner from "@components/spin/spin";
import {
  CoinContent,
  CoinDesc,
  CoinListContainer,
  CoinName,
} from "../styles/coinListContainer_style";
import { CoinPriceSection } from "./CoinPrice";
import { CoinPriceChangeSection } from "./CoinChangePrice";
import { AddToFavoriteSection } from "./AddToFavorite";
import { CoinListProps } from "../types/coinList_types";

export const CoinList: React.FC<CoinListProps> = ({ data, loading }) => {
  return (
    <CoinListContainer>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.map(
          (coin: {
            iconUrl: string;
            name: string;
            price: string;
            change: string;
            uuid: string;
          }) => {
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
          }
        )
      )}
    </CoinListContainer>
  );
};
