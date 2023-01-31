import * as React from "react";
import { Spin } from "antd";
import CoinItem from "@components/coinItem/content/CoinItem";
import { CoinInterface } from "types";
import { CoinListProps } from "./coinList_types";
import {
  CoinListContainer,
} from "../styles/coinListContainer_style";

export const CoinList: React.FC<CoinListProps> = ({ data, loading,currencySign }) => {
  return (
    <CoinListContainer>
      {loading ? (
        <Spin />
      ) : (
        data &&
        data.map((coin: CoinInterface) => {
          const { uuid } = coin;
          return <CoinItem key={uuid} {...coin} currencySign={currencySign} />;
        })
      )}
    </CoinListContainer>
  );
};
