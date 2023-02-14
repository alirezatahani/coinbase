import React from "react";
import { useAppSelector } from "hooks/hooks";
import { coinStatisticsType } from "../content/coinDetail_types";
import {
  ExperimentTwoTone,
  DollarCircleTwoTone,
  MoneyCollectTwoTone,
  TrophyTwoTone,
  PieChartTwoTone,
  FundTwoTone,
} from "@ant-design/icons";

export const CreateCoinStatisticsArray = ({ ...props }) => {
  const {
    allTimeHigh,
    btcPrice,
    fullyDilutedMarketCap,
    marketCap,
    price,
    rank,
  } = props;
  const volume24h = props["24hVolume"];
  const {label,sign} = useAppSelector((state) => state.referenceCurrency);

  const coinStatisticsArray:coinStatisticsType[] = [
    {
      title: `Price to ${label}`,
      data: price,
      currencySign: sign,
      tooltip: false,
      icon: <DollarCircleTwoTone />,
    },
    {
      title: "Price to BTC",
      btc: true,
      data: btcPrice,
      currencySign: "BTC",
      tooltip: false,
      icon: <PieChartTwoTone />,
    },
    {
      title: "Rank",
      data: rank,
      tooltip: true,
      tooltipTitle:
        "A coin's place on our global ranking (by highest market cap).",
      icon: <TrophyTwoTone />,
    },
    {
      title: "24h volume",
      data: volume24h,
      currencySign: sign,
      tooltip: true,
      tooltipTitle:
        "The total value of all trades with this coin on exchanges, in the past 24 hours.",
      icon: <ExperimentTwoTone />,
    },
    {
      title: "Market cap",
      data: marketCap,
      currencySign: sign,
      tooltip: true,
      tooltipTitle:
        "Market cap is the circulating supply of a coin multiplied by its current price. So, if a coin has 100 units outstanding and is trading for $10 a coin, it has a market cap of $1,000.",
      icon: <MoneyCollectTwoTone />,
    },
    {
      title: "Volume / Market cap",
      data: Number(volume24h) / Number(marketCap),
      tooltip: true,
      tooltipTitle:
        "Volume / Market cap is a coin's 24h trading volume divided by its market cap. A high ratio means that the coin is highly liquid.",
      icon: <MoneyCollectTwoTone />,
    },
    {
      title: "Fully diluted market cap",
      data: fullyDilutedMarketCap,
      currencySign: sign,
      tooltip: true,
      tooltipTitle:
        "Fully diluted market cap is a coin's price multiplied by its total supply. It shows what the market cap could be if all coins were in circulation, with the current price.",
      icon: <MoneyCollectTwoTone />,
    },
    {
      title: "All-time high (daily avg.)",
      data: allTimeHigh.price,
      currencySign: "$",
      tooltip: true,
      tooltipTitle:
        "All-time high (daily average) is the highest daily average price of a coin.",
      icon: <FundTwoTone />,
      timestamp: allTimeHigh.timestamp,
      lastRow: true,
    },
  ];
  return coinStatisticsArray;
};
