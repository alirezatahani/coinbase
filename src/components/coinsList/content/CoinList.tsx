import * as React from "react";
import {
  CoinContent,
  CoinListContainer,
} from "../styles/coinListContainer_style";
import { CoinInterface } from "types";
import { CoinListProps } from "../coinList_types";
import { Spin } from "antd";
import CoinItem from "@components/coinItem/content/CoinItem";

export const CoinList: React.FC<CoinListProps> = ({ data, loading }) => {
  return (
    <CoinListContainer>
      {loading ? (
        <Spin />
      ) : (
        data &&
        data.map((coinItem: CoinInterface) => {
          const { coin } = coinItem;
          return (
            <CoinContent key={coin.uuid}>
              <CoinItem coin={coin} />
            </CoinContent>
          );
        })
      )}
    </CoinListContainer>
  );
};
