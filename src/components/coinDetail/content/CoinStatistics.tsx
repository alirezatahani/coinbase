import React from "react";
import { Tooltip } from "antd";
import { numberToPrice } from "@utils/numberToPrice";
import { timstampToDate } from "@utils/timestamp";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { CoinInterface } from "types";
import { CreateCoinStatisticsArray } from "./coinStatisticsArray";
import {
  CoinStatisticsRowContainer,
  CoinStatisticsRow,
  CoinStatisticsTitle,
  CoinStatisticsTitleContainer,
  CoinStatisticsRowTitleContainer,
  RowIconContainer,
  RowValueContainer,
} from "../style/coinStatistics_styles";

const CoinStatistics: React.FC<CoinInterface> = ({ name, ...props }) => {
  const coinStatisticsArray = CreateCoinStatisticsArray(props as CoinInterface);

  return (
    <section>
      <CoinStatisticsTitleContainer>
        <CoinStatisticsTitle>Value statistics</CoinStatisticsTitle>
        <span>
          An overview showing the statistics of {name}, such as the base and
          quote currency, the rank, and trading volume.
        </span>
      </CoinStatisticsTitleContainer>
      {coinStatisticsArray.map((item: any) => (
        <CoinStatisticsRowContainer key={item.title}>
          <CoinStatisticsRow isLastRow={item.lastRow}>
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
                <span>on {timstampToDate(item.timestamp)}</span>
              ) : null}
            </RowValueContainer>
          </CoinStatisticsRow>
        </CoinStatisticsRowContainer>
      ))}
    </section>
  );
};

export default CoinStatistics;
