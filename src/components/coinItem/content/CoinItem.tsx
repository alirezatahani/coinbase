import * as React from "react";
import { CoinInterface } from "types";
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import { useRouter } from "@utils/router";
import { littleChartConfig } from "lib/littleChartConfig";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice/content/CoinPrice";
import { CoinDesc, CoinName, CoinContent } from "../style/coinItem_style";

const CoinItem: React.FC<CoinInterface> = ({ currencySign, ...coin }) => {
  const { goTo } = useRouter();
  const { name, iconUrl, price, uuid, sparkline } = coin;

  return (
    <CoinContent>
      <CoinDesc
        onClick={() => {
          goTo(`:${uuid}`);
        }}
      >
        <img src={iconUrl} style={{ width: 40 }} />
        <CoinName> {name}</CoinName>
      </CoinDesc>
      <CoinPriceSection price={price} currencySign={currencySign} />
      {sparkline && (
        <Chart highcharts={Highcharts} options={littleChartConfig(coin)} />
      )}
      <AddToFavoriteSection {...coin}/>
    </CoinContent>
  );
};

export default CoinItem;
