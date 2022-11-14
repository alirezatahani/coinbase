import React from "react";
import { numberToPrice } from "@utils/numberToPrice";
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import { linChartConfig } from "lib/lineChartConfig";
import { CoinDetailProps } from "./coinDetail_types";
import { Tooltip } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  Coin,
  CoinChange,
  CoinDesc,
  CoinStatistics,
  CoinStatisticsRow,
  CoinStatisticsTitle,
  CoinStatisticsTitleContainer,
  MyDiv,
  RankBadge,
} from "../style/coinDetail_style";

const CoinDetail: React.FC<CoinDetailProps> = ({ coinData }) => {
  console.log(coinData, "aghaghagh");
  const { iconUrl, change, name, rank, price, symbol, btcPrice } = coinData;
  const volume24h = coinData["24hVolume"]
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
        <span>$ {numberToPrice(Number(price))}</span>
      </CoinDesc>
      <Chart highcharts={Highcharts} options={linChartConfig(coinData, true)} />
      <CoinStatisticsTitleContainer>
        <CoinStatisticsTitle>Value statistics</CoinStatisticsTitle>
        <span>
          An overview showing the statistics of {name}, such as the base and
          quote currency, the rank, and trading volume.
        </span>
      </CoinStatisticsTitleContainer>
      <CoinStatistics>
        <CoinStatisticsRow>
          <span>Price to USD</span>
          <span>$ {numberToPrice(Number(price))}</span>
        </CoinStatisticsRow>
        <CoinStatisticsRow>
          <span>Price to BTC</span>
          <span>
            {numberToPrice(Number(btcPrice))}
            BTC
          </span>
        </CoinStatisticsRow>
        <CoinStatisticsRow>
          <MyDiv>
            <span>Rank</span>
            <Tooltip title="A coin's place on our global ranking (by highest market cap).">
              <ExclamationCircleOutlined />
            </Tooltip>
          </MyDiv>
          <span>{rank}</span>
        </CoinStatisticsRow>
        <CoinStatisticsRow>
          <MyDiv>
            <span>24h volume</span>
            <Tooltip title="The total value of all trades with this coin on exchanges, in the past 24 hours.">
              <ExclamationCircleOutlined />
            </Tooltip>
          </MyDiv>
          <span>$ {numberToPrice(Number(volume24h))}</span>
        </CoinStatisticsRow>
      </CoinStatistics>
    </section>
  );
};

export default CoinDetail;
