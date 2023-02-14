import React from "react";
import { useAppSelector } from "hooks/hooks";
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import { linChartConfig } from "lib/lineChartConfig";
import { BackButton } from "@components/backBtn";
import { numberToPrice } from "@utils/numberToPrice";
import { CoinInterface } from "types";
import CoinStatistics from "./CoinStatistics";
import {
  Coin,
  CoinChange,
  CoinDesc,
  MyDiv,
  RankBadge,
} from "../style/coinDetail_style";

const CoinDetail: React.FC<CoinInterface> = ({ ...props }) => {
  const { name, iconUrl, change, rank, price, symbol } = props;
  const { sign } = useAppSelector((state) => state.referenceCurrency);

  return (
    <section>
      <BackButton />
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
        <span>{numberToPrice(Number(price), sign)}</span>
      </CoinDesc>
      <Chart highcharts={Highcharts} options={linChartConfig(props)} />
      <CoinStatistics {...props} />
    </section>
  );
};

export default CoinDetail;
