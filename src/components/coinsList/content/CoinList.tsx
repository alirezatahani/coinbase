import React, { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { CoinInterface } from "types";
import { CoinListProps } from "./coinList_types";
import { Spin } from "antd";
import CoinItem from "@components/coinItem/content/CoinItem";
import {
  CoinListContainer,
  NoResultText,
} from "../styles/coinListContainer_style";

export const CoinList: React.FC<CoinListProps> = ({
  data,
  error,
  hasMore,
  loading,
  handleOffset,
  searchCoin,
}) => {
  const [ref, isVisible] = useInView({ threshold: 1 });

  useEffect(() => {
    if (isVisible && hasMore) {
      handleOffset();
    }
  }, [isVisible]);

  if (data?.length === 0 && searchCoin && !loading && !error)
    return <NoResultText>No results for {searchCoin}</NoResultText>;

  return (
    <>
      <CoinListContainer>
        {data.map((coin: CoinInterface) => {
          const { change, uuid } = coin;
          return <CoinItem key={uuid} change={Number(change)} {...coin} />;
        })}
      </CoinListContainer>
      <div ref={ref}>{hasMore && loading && !error ? <Spin /> : ""}</div>
      {error && <NoResultText>{error}</NoResultText>}
    </>
  );
};
