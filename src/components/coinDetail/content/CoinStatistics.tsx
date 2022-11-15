import React from "react";
import { Tooltip } from "antd";
import { numberToPrice } from "@utils/numberToPrice";
import { timstampToDate } from "@utils/timestamp";
import {
  ExclamationCircleOutlined,
  ExperimentTwoTone,
  DollarCircleTwoTone,
  MoneyCollectTwoTone,
  TrophyTwoTone,
  PieChartTwoTone,
  FundTwoTone,
} from "@ant-design/icons";
import {
  CoinStatisticsRowContainer,
  CoinStatisticsRow,
  CoinStatisticsTitle,
  CoinStatisticsTitleContainer,
  CoinStatisticsRowTitleContainer,
  RowIconContainer,
  RowValueContainer,
} from "../style/coinStatistics_styles";
import { CoinDetailProps } from "@components/coinDetail/content/coinDetail_types";

const CoinStatistics: React.FC<CoinDetailProps> = ({ coinData }) => {
  const {
    name,
    allTimeHigh,
    btcPrice,
    fullyDilutedMarketCap,
    marketCap,
    price,
    rank,
  } = coinData;
  const volume24h = coinData["24hVolume"];
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
    },
  ];

  return (
    <section>
      <CoinStatisticsTitleContainer>
        <CoinStatisticsTitle>Value statistics</CoinStatisticsTitle>
        <span>
          An overview showing the statistics of {name}, such as the base and
          quote currency, the rank, and trading volume.
        </span>
      </CoinStatisticsTitleContainer>
      {coinStatisticsArray.map((item) => (
        <CoinStatisticsRowContainer>
          <CoinStatisticsRow>
            <CoinStatisticsRowTitleContainer>
              <RowIconContainer>{item.icon}</RowIconContainer>
              <span>{item.title}</span>
              <span>
                {item.tooltip ? (
                  <Tooltip title={item.tooltipTitle}>
                    <ExclamationCircleOutlined />
                  </Tooltip>
                ) : null}
              </span>
            </CoinStatisticsRowTitleContainer>
            <RowValueContainer>
              {" "}
              {item.dollarSign ? "$" : ""} {numberToPrice(Number(item.data))}
              {item.btc ? "BTC" : ""}
              {item.timestamp ? (
                <span>on {timstampToDate(allTimeHigh.timestamp)}</span>
              ) : null}
            </RowValueContainer>
          </CoinStatisticsRow>
        </CoinStatisticsRowContainer>
      ))}
    </section>
  );
};

export default CoinStatistics;
