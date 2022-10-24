import * as React from "react";
import { CoinPriceChangeProps } from "./coinPriceChange_types";
import {
  CoinNegetiveChange,
  CoinPositiveChange,
} from "../style/coinPriceChange_style";

export const CoinPriceChangeSection: React.FC<CoinPriceChangeProps> = ({
  priceChange,
}) => {
  if (priceChange === 0) return <CoinNegetiveChange>0</CoinNegetiveChange>;
  return priceChange < 0 ? (
    <CoinNegetiveChange>{priceChange}%</CoinNegetiveChange>
  ) : (
    <CoinPositiveChange>+{priceChange}%</CoinPositiveChange>
  );
};
