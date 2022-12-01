import React from "react";
import {
  ExperimentTwoTone,
  DollarCircleTwoTone,
  MoneyCollectTwoTone,
  TrophyTwoTone,
  PieChartTwoTone,
  FundTwoTone,
} from "@ant-design/icons";
import { CoinInterface } from "types";

export const CreateCoinStatisticsArray = ({ ...props }: CoinInterface) => {
  const {
    allTimeHigh,
    btcPrice,
    fullyDilutedMarketCap,
    marketCap,
    price,
    rank,
    volume24h,
  } = props;
  const coinStatisticsArray = [
    {
      title: "Price to USD",
      data: price,
      dollarSign: true,
      tooltip: false,
      icon: <DollarCircleTwoTone />,
    },
    {
      title: "Price to BTC",
      btc: true,
      data: btcPrice,
      dollarSign: false,
      tooltip: false,
      icon: <PieChartTwoTone />,
    },
    {
      title: "Rank",
      data: rank,
      dollarSign: false,
      tooltip: false,
      icon: <TrophyTwoTone />,
    },
    {
      title: "24h volume",
      data: volume24h,
      dollarSign: true,
      tooltip: true,
      tooltipTitle:
        "The total value of all trades with this coin on exchanges, in the past 24 hours.",
      icon: <ExperimentTwoTone />,
    },
    {
      title: "Market cap",
      data: marketCap,
      dollarSign: true,
      tooltip: true,
      tooltipTitle:
        "Market cap is the circulating supply of a coin multiplied by its current price. So, if a coin has 100 units outstanding and is trading for $10 a coin, it has a market cap of $1,000.",
      icon: <MoneyCollectTwoTone />,
    },
    {
      title: "Volume / Market cap",
      data: Number(volume24h) / Number(marketCap),
      dollarSign: false,
      tooltip: true,
      tooltipTitle:
        "Volume / Market cap is a coin's 24h trading volume divided by its market cap. A high ratio means that the coin is highly liquid.",
      icon: <MoneyCollectTwoTone />,
    },
    {
      title: "Fully diluted market cap",
      data: fullyDilutedMarketCap,
      dollarSign: true,
      tooltip: true,
      tooltipTitle:
        "Fully diluted market cap is a coin's price multiplied by its total supply. It shows what the market cap could be if all coins were in circulation, with the current price.",
      icon: <MoneyCollectTwoTone />,
    },
    {
      title: "All-time high (daily avg.)",
      data: allTimeHigh.price,
      dollarSign: true,
      tooltip: true,
      tooltipTitle:
        "All-time high (daily average) is the highest daily average price of a coin.",
      icon: <FundTwoTone />,
      timestamp: allTimeHigh.timestamp,
      lastRow:true
    },
  ];
  return coinStatisticsArray;
};
