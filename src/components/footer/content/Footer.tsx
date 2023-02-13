import React, { useEffect } from "react";
import { CoinInterface } from "types";
import useFetch from "../../../hooks/useFetch";
import { useAppSelector } from "hooks/hooks";
import { numberToPrice } from "@utils/numberToPrice";
import { convertToQuery } from "@utils/queries";
import { Spin } from "antd";
import {
  FavCoinChange,
  FavCoinDesc,
  FavCoinTitle,
  FooterContainer,
  EmptyText,
  FavCoinCard,
} from "../style/footer_style";

const Footer = () => {
  const { favoriteList } = useAppSelector((state) => state.FavoriteReducer);
  const { sign, value } = useAppSelector((state) => state.referenceCurrency);
  const timePeriod = useAppSelector((state) => state.timePeriod.timePeriod);
  const [{ loading, data }, fetchCoinsData] = useFetch();

  const uuidsString = favoriteList
    .map((item: string, index: number) => {
      let query = "";
      if (index === 0) query = item;
      else query = `uuids[]=${item}`;
      return query;
    })
    .join("&");

  const queries = {
    timePeriod,
    referenceCurrencyUuid: value,
    uuids: uuidsString,
  };

  const makingUrl = () => {
    return convertToQuery(queries);
  };

  useEffect(() => {
    const url = makingUrl();
    fetchCoinsData({ url: `/coins?${url}`, method: "get" });
  }, [favoriteList, value]);

  if (loading)
    return (
      <FooterContainer>
        <Spin />
      </FooterContainer>
    );
  return (
    <FooterContainer>
      {favoriteList.length ? (
        data &&
        data.data.coins.map((coin: CoinInterface) => (
          <FavCoinCard>
            <img src={coin.iconUrl} style={{ width: "40px" }} />
            <FavCoinDesc>
              <FavCoinTitle>
                <span>{coin.symbol}</span>
                <FavCoinChange change={Number(coin.change)}>
                  {Number(coin.change) > 0
                    ? `+${coin.change}`
                    : `${coin.change}`}
                </FavCoinChange>
              </FavCoinTitle>
              <span>{numberToPrice(Number(coin.price), sign)}</span>
            </FavCoinDesc>
          </FavCoinCard>
        ))
      ) : (
        <EmptyText>favorite coins list is empty ... </EmptyText>
      )}
    </FooterContainer>
  );
};
export default Footer;
