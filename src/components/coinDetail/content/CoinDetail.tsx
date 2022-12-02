import React from "react";
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import { linChartConfig } from "lib/lineChartConfig";
import { numberToPrice } from "@utils/numberToPrice";
import CoinStatistics from "./CoinStatistics";
import { CoinDetailProps } from "./coinDetail_types";
import {
  Coin,
  CoinChange,
  CoinDesc,
  MyDiv,
  RankBadge,
} from "../style/coinDetail_style";

const CoinDetail: React.FC<CoinDetailProps> = ({ coinData }) => {
  const {
    name,
    iconUrl,
    change,
    rank,
    price,
    symbol,
    allTimeHigh,
    btcPrice,
    fullyDilutedMarketCap,
    marketCap,
  } = coinData;
  const volume24h = coinData["24hVolume"];
  return (
    <section>
      <CoinDesc>
        <MyDiv>
          <img src={iconUrl} style={{ width: 40 }} />
          <div>
            <Coin>
              {name}
              <CoinChange price={change}>{change}</CoinChange>
            </Coin>
            <MyDiv>
              <span>{symbol}</span>
              <RankBadge>#{rank}</RankBadge>
            </MyDiv>
          </div>
        </MyDiv>
        <span>{numberToPrice(Number(price),"$")}</span>
      </CoinDesc>
      <Chart highcharts={Highcharts} options={linChartConfig(coinData, true)} />
      <CoinStatistics
        allTimeHigh={allTimeHigh}
        btcPrice={btcPrice}
        fullyDilutedMarketCap={fullyDilutedMarketCap}
        marketCap={marketCap}
        price={price}
        rank={rank}
        change={change}
        volume24h={volume24h}
      />
    </section>
  );
};

export default CoinDetail;
