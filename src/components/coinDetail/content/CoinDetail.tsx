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
  console.log(coinData, "aghaghagh");
  const { iconUrl, change, name, rank, price, symbol } = coinData;

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
      <CoinStatistics coinData={coinData} />
    </section>
  );
};

export default CoinDetail;
