import { Collapse, Spin } from "antd";
import useFetch from "../../../hooks/useFetch";
import * as React from "react";
import { useSelector } from "react-redux";
import {
  Coin,
  CoinChange,
  CoinDesc,
  CoinDetailPage,
  MyDiv,
  RankBadge,
} from "../style/coinDetail_style";
import { numberToPrice } from "@utils/numberToPrice";
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import { linChartConfig } from "lib/lineChartConfig";

const CoinDetail = () => {
  const query = useSelector((state: any) => state.stack.query);
  const [{ loading, data }, getCoinData] = useFetch();

  React.useEffect(() => {
    getCoinData({ url: `/coin/${query}`, method: "get" });
  }, []);
  console.log(data);

  return (
    <CoinDetailPage>
      {loading ? (
        <Spin />
      ) : data && data.data.coin ? (
        <section>
          <CoinDesc>
            <MyDiv>
              <img src={data.data.coin.iconUrl} style={{ width: 40 }} />
              <div>
                <Coin>
                  {data.data.coin.name}
                  <CoinChange price={data.data.coin.change}>
                    {data.data.coin.change}
                  </CoinChange>
                </Coin>
                <MyDiv>
                  <span>{data.data.coin.symbol}</span>
                  <RankBadge>#{data.data.coin.rank}</RankBadge>
                </MyDiv>
              </div>
            </MyDiv>
            <span>$ {numberToPrice(Number(data.data.coin.price))}</span>
          </CoinDesc>
          <Chart
            highcharts={Highcharts}
            options={linChartConfig(data.data.coin, true)}
          />
        </section>
      ) : null}
    </CoinDetailPage>
  );
};

export default CoinDetail;
