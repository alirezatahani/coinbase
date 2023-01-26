import * as React from "react";
import { CoinInterface } from "types";
import Highcharts from 'highcharts/highstock'
import Chart from 'highcharts-react-official'
import { littleChartConfig } from "lib/littleChartConfig";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice/content/CoinPrice";
import { CoinDesc, CoinName, CoinContent } from "../style/coinItem_style";

const CoinItem: React.FC<CoinInterface> = ({currencySign,...coin}) => {
  const { name,iconUrl, price, uuid } = coin;
  return (
    <CoinContent>
      <CoinDesc>
        <img src={iconUrl} style={{ width: 40 }} />
        <CoinName> {name}</CoinName>
      </CoinDesc>
      <CoinPriceSection price={price} currencySign={currencySign} />
      <Chart highcharts={Highcharts} options={littleChartConfig(coin,currencySign)} />
      <AddToFavoriteSection uuid={uuid} />
    </CoinContent>
  );
};

export default CoinItem;
