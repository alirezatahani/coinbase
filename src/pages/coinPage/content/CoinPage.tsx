import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import useFetch from "../../../hooks/useFetch";
import { numberToPrice } from "@utils/numberToPrice";
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import { linChartConfig } from "lib/lineChartConfig";
import {
  Coin,
  CoinChange,
  CoinDesc,
  CoinDetailPage,
  CoinStatistics,
  CoinStatisticsRow,
  CoinStatisticsTitle,
  CoinStatisticsTitleContainer,
  MyDiv,
  RankBadge,
} from "../style/coinPage_style";

const CoinDetail = () => {
  const query = useSelector((state: any) => state.stack.query);
  const [{ loading, data }, getCoinData] = useFetch();

  useEffect(() => {
    getCoinData({
      url: `/coins?uuids[]=${query}&uuids[]=Qwsogvtv82FCd`,
      method: "get",
    });
  }, []);

  console.log(data);

  return (
    <CoinDetailPage>
      {loading ? (
        <Spin />
      ) : data && data.data.coins ? (
        <section>
          <CoinDesc>
            <MyDiv>
              <img src={data.data.coins[1].iconUrl} style={{ width: 40 }} />
              <div>
                <Coin>
                  {data.data.coins[1].name}
                  <CoinChange price={data.data.coins[1].change}>
                    {data.data.coins[1].change}
                  </CoinChange>
                </Coin>
                <MyDiv>
                  <span>{data.data.coins[1].symbol}</span>
                  <RankBadge>#{data.data.coins[1].rank}</RankBadge>
                </MyDiv>
              </div>
            </MyDiv>
            <span>$ {numberToPrice(Number(data.data.coins[1].price))}</span>
          </CoinDesc>
          <Chart
            highcharts={Highcharts}
            options={linChartConfig(data.data.coins[1], true)}
          />
          <CoinStatisticsTitleContainer>
            <CoinStatisticsTitle>Value statistics</CoinStatisticsTitle>
            <span>
              An overview showing the statistics of {data.data.coins[1].name},
              such as the base and quote currency, the rank, and trading volume.
            </span>
          </CoinStatisticsTitleContainer>
          <CoinStatistics>
            <CoinStatisticsRow>
              <span>Price to USD</span>
              <span>$ {numberToPrice(Number(data.data.coins[1].price))}</span>
            </CoinStatisticsRow>
          </CoinStatistics>
        </section>
      ) : null}
    </CoinDetailPage>
  );
};

export default CoinDetail;
