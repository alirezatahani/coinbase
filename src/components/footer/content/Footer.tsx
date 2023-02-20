import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Spin } from "antd";
import { useAppSelector } from "hooks/hooks";
import { convertToQuery } from "@utils/queries";
import FavoriteCoinsContainer from "./FavoriteCoinsContainer";
import { FooterSection, EmptyText } from "../style/footer_style";

const Footer = () => {
  const { favoriteCoinsUuid, favoriteCoins } = useAppSelector(
    (state) => state.FavoriteReducer
  );
  const { value } = useAppSelector((state) => state.referenceCurrency);
  const timePeriod = useAppSelector((state) => state.timePeriod.timePeriod);
  const [{ loading, data }, fetchCoinsData] = useFetch();
  const [favCoinData, setFavCoinData] = useState(favoriteCoins);
  const initialRender = useRef(true);

  const uuidsString = favoriteCoinsUuid
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
    if (favoriteCoinsUuid.length > 0) {
      const url = makingUrl();
      fetchCoinsData({ url: `/coins?${url}`, method: "get" });
    } else {
      return;
    }
  }, [value, favoriteCoinsUuid]);
  useEffect(() => {
    let myInterval: any;
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      myInterval = setInterval(() => {
        const url = makingUrl();
        fetchCoinsData({ url: `/coins?${url}`, method: "get" });
      }, 20000);
    }
    if (favoriteCoinsUuid.length === 0) {
      clearInterval(myInterval);
    }
    return () => clearInterval(myInterval);
  }, [favoriteCoinsUuid, value]);
  useEffect(() => {
    if (data) {
      setFavCoinData(data.data.coins);
    }
  }, [data]);

  if (favoriteCoinsUuid.length === 0)
    return (
      <FooterSection>
        <EmptyText>favorite coins list is empty ... </EmptyText>
      </FooterSection>
    );
  return (
    <FooterSection>
      <Spin spinning={loading} delay={500}>
        <FavoriteCoinsContainer favCoinsList={favCoinData} />
      </Spin>
    </FooterSection>
  );
};
export default Footer;
