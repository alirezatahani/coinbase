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
import { timstampToDate } from "@utils/timestamp";

const CoinDetail: React.FC<CoinDetailProps> = ({ coinData }) => {
  console.log(coinData, "aghaghagh");
  const {
    iconUrl,
    change,
    name,
    rank,
    price,
    symbol,
    btcPrice,
    marketCap,
    fullyDilutedMarketCap,
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
        <CoinStatisticsRow>
          <MyDiv>
            <span>Market cap</span>
            <Tooltip title="Market cap is the circulating supply of a coin multiplied by its current price. So, if a coin has 100 units outstanding and is trading for $10 a coin, it has a market cap of $1,000.">
              <ExclamationCircleOutlined />
            </Tooltip>
          </MyDiv>
          <span>$ {numberToPrice(Number(marketCap))}</span>
        </CoinStatisticsRow>
        <CoinStatisticsRow>
          <MyDiv>
            <span>Volume / Market cap</span>
            <Tooltip title="Volume / Market cap is a coin's 24h trading volume divided by its market cap. A high ratio means that the coin is highly liquid.">
              <ExclamationCircleOutlined />
            </Tooltip>
          </MyDiv>
          <span>{numberToPrice(Number(volume24h) / Number(marketCap))}</span>
        </CoinStatisticsRow>
        <CoinStatisticsRow>
          <MyDiv>
            <span>Fully diluted market cap</span>
            <Tooltip title="Fully diluted market cap is a coin's price multiplied by its total supply. It shows what the market cap could be if all coins were in circulation, with the current price.">
              <ExclamationCircleOutlined />
            </Tooltip>
          </MyDiv>
          <span>$ {numberToPrice(Number(fullyDilutedMarketCap))}</span>
        </CoinStatisticsRow>
      </CoinStatistics>
    </section>
  );
};

export default CoinDetail;
