import * as React from "react";
import { Spin } from "antd";
import CoinItem from "@components/coinItem/content/CoinItem";
import { CoinInterface } from "types";
import { CoinListProps } from "./coinList_types";
import {
  CoinListContainer,
  NoResultText,
} from "../styles/coinListContainer_style";

export const CoinList: React.FC<CoinListProps> = ({ data, loading,error,
  searchCoin,currencySign }) => {

  if (loading) return <Spin />;
  if (data?.length === 0 && searchCoin)
    return <NoResultText>No results for {searchCoin}</NoResultText>;
  return (
    <CoinListContainer>
      {data &&
        data.map((coin: CoinInterface) => {
          const { uuid } = coin;
          return <CoinItem key={uuid} {...coin} currencySign={currencySign} />;
        })
      )}
      {error && <NoResultText>{error}</NoResultText>}
    </CoinListContainer>
  );
};
