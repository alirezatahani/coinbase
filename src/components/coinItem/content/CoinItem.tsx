import * as React from "react";
import { CoinInterface } from "types";
import Highcharts from 'highcharts/highstock'
import Chart from 'highcharts-react-official'
import { linChartConfig } from "lib/lineChartConfig";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice/content/CoinPrice";
import { CoinDesc, CoinName, CoinContent } from "../style/coinItem_style";

const CoinItem: React.FC<CoinInterface> = ({ name, ...props }) => {
  const { iconUrl, change, price, uuid } = props;
  return (
    <CoinContent>
      <CoinDesc>
        <img src={iconUrl} style={{ width: 40 }} />
        <CoinName> {name}</CoinName>
      </CoinDesc>
      <CoinPriceSection price={price} />
      <Chart highcharts={Highcharts} options={linChartConfig(props)} />
      <AddToFavoriteSection
        change={change}
        iconUrl={iconUrl}
        name={name}
        price={price}
        uuid={uuid}
      />
    </CoinContent>
  );
};

export default CoinItem;
