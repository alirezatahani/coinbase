import React, { useCallback, useRef } from "react";
import { CoinInterface } from "types";
import { CoinListProps } from "./coinList_types";
import { Spin } from "antd";
import CoinItem from "@components/coinItem/content/CoinItem";
import {
  CoinListContainer,
  NoResultText,
} from "../styles/coinListContainer_style";

export const CoinList: React.FC<CoinListProps> = ({
  hasMore,
  data,
  error,
  loading,
  handleOffset,
  searchCoin,
}) => {
  const observer = useRef<IntersectionObserver>();
  const lastCoin =
    !searchCoin &&
    useCallback(
      (node: Element) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            handleOffset();
          }
        });
        if (node) observer.current.observe(node);
      },
      [loading, hasMore]
    );

  if (data?.length === 0 && searchCoin && !loading && !error)
    return <NoResultText>No results for {searchCoin}</NoResultText>;

  return (
    <CoinListContainer>
      {data.map((coin: CoinInterface, index: number) => {
        const { change, iconUrl, name, price, uuid } = coin;
        if (data.length === index + 1 && lastCoin) {
          return (
            <div ref={lastCoin} key={uuid}>
              <CoinItem
                uuid={uuid}
                change={Number(change)}
                iconUrl={iconUrl}
                name={name}
                price={price}
              />
            </div>
          );
        } else {
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
        }
      })}
      {loading && <Spin />}
      {error && <NoResultText>{error}</NoResultText>}
    </CoinListContainer>
  );
};
