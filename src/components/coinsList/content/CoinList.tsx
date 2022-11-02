import * as React from "react";
import {
  CoinListContainer,
} from "../styles/coinListContainer_style";
import { CoinInterface } from "types";
import { CoinListProps } from "./coinList_types";
import { Spin } from "antd";
import CoinItem from "@components/coinItem/content/CoinItem";

export const CoinList: React.FC<CoinListProps> = ({ data, loading }) => {
  return (
    <CoinListContainer>
      {loading ? (
        <Spin />
      ) : (
        data &&
        data.map((coin: CoinInterface) => {
          const { change, iconUrl, name, price, uuid } = coin;
          return (
            <CoinItem
              key={uuid}
              uuid={uuid}
              change={Number(change)}
              iconUrl={iconUrl}
              name={name}
              price={price}
            />
          );
        })
      )}
    </CoinListContainer>
  );
};
