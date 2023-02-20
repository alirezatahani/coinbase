import React, { useEffect, useRef, useState } from "react";
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
  EmptyText,
  FrontCard,
  BackCard,
  FlipCoinCard,
  InnerCard,
  BackCardDesc,
  BackCardValue,
  BackCardTitle,
  CoinName,
  FooterSection,
  Container,
} from "../style/footer_style";

const Footer = () => {
  const { favoriteCoinsUuid, favoriteCoins } = useAppSelector(
    (state) => state.FavoriteReducer
  );
  const { sign, value } = useAppSelector((state) => state.referenceCurrency);
  const timePeriod = useAppSelector((state) => state.timePeriod.timePeriod);
  const [{ loading, data }, fetchCoinsData] = useFetch();
  const [flipped, setFlipped] = useState<any>({});
  const [favCoinData, setFavCoinData] = useState(favoriteCoins);

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
  const flipCard = (id: number) => {
    setFlipped((prevState: any) => ({ ...flipped, [id]: !prevState[id] }));
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
        <Container>
          {favCoinData.map((coin: CoinInterface, i: number) => (
            <FlipCoinCard key={coin.uuid}>
              <InnerCard onClick={() => flipCard(i)} flipped={flipped[i]}>
                <FrontCard>
                  <img src={coin.iconUrl} style={{ width: "40px" }} />
                  <FavCoinDesc>
                    <FavCoinTitle>
                      <CoinName>
                        {coin.symbol}
                        <FavCoinChange change={Number(coin.change)}>
                          {Number(coin.change) > 0
                            ? `+${coin.change}`
                            : `${coin.change}`}
                        </FavCoinChange>
                      </CoinName>
                    </FavCoinTitle>
                    <span>{numberToPrice(Number(coin.price), sign)}</span>
                  </FavCoinDesc>
                </FrontCard>
                <BackCard>
                  <CoinName>
                    <span>{coin.name}</span>
                    <span>#{coin.rank}</span>
                  </CoinName>
                  <BackCardDesc>
                    <BackCardTitle>24h volume({sign}):</BackCardTitle>
                    <BackCardValue>
                      {numberToPrice(Number(coin["24hVolume"]))}
                    </BackCardValue>
                  </BackCardDesc>
                  <BackCardDesc>
                    <BackCardTitle>Market cap({sign}):</BackCardTitle>
                    <BackCardValue>
                      {numberToPrice(Number(coin.marketCap))}
                    </BackCardValue>
                  </BackCardDesc>
                </BackCard>
              </InnerCard>
            </FlipCoinCard>
          ))}
        </Container>
      </Spin>
    </FooterSection>
  );
};
export default Footer;
