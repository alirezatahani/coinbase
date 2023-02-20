import { ReactElement } from "react";

export type coinStatisticsType = {
  title: string;
  btc?: boolean;
  data: string | number;
  currencySign?: string;
  tooltip: boolean;
  tooltipTitle?: string;
  icon: ReactElement;
  timestamp?: number;
  lastRow?: boolean;
};

export type CoinChangeProps = {
  price: number;
};

export type CoinStatisticsRowProps = {
  isLastRow: Boolean;
};
