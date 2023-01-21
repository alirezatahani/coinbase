import React from "react";
import { CoinInterface } from "types";
import { Spin } from "antd";
import { CoinListProps } from "./coinList_types";
import CoinItem from "@components/coinItem/content/CoinItem";
import {
  CoinListContainer,
  NoResultText,
} from "../styles/coinListContainer_style";

export const CoinList: React.FC<CoinListProps> = ({
  data,
  loading,
  error,
  searchCoin,
}) => {
  if (loading) return <Spin />;
  if (data?.length === 0 && searchCoin)
    return <NoResultText>No results for {searchCoin}</NoResultText>;
  return (
    <>
      <CoinListContainer>
        {data.map((coin: CoinInterface) => {
          const { change, uuid } = coin;
          return <CoinItem key={uuid} change={Number(change)} {...coin} />;
        })}
        {error && <NoResultText>{error}</NoResultText>}
      </CoinListContainer>
    </>
  );
};
