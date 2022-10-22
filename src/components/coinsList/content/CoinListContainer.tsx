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

export const CoinList = (props: any) => {
  const { loading, data } = props;

  return (
    <CoinListContainer>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.data.coins.map(
          (coin: {
            iconUrl: string;
            name: string;
            price: string;
            change: string;
            uuid: string;
          }) => {
            return (
              <CoinContent key={coin.uuid}>
                <CoinDesc>
                  <img src={coin.iconUrl} style={{ width: 40 }} />
                  <CoinName> {coin.name}</CoinName>
                </CoinDesc>
                <CoinPriceSection props={coin.price} />
                {coin.change ? (
                  <CoinPriceChangeSection props={coin.change} />
                ) : null}
                <AddToFavoriteSection props={coin} />
              </CoinContent>
            );
          }
        )
      )}
    </CoinListContainer>
  );
};
