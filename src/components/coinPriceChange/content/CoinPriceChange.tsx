import * as React from "react";
import { CoinPriceChangeProps } from "./coinPriceChange_types";
import {
  CoinNegetiveChange,
  CoinPositiveChange,
} from "../style/coinPriceChange_style";

export const CoinPriceChangeSection: React.FC<CoinPriceChangeProps> = ({
  priceChange,
}) => {
  if (priceChange === null) return <CoinNegetiveChange>0</CoinNegetiveChange>;
  return priceChange.includes("-") ? (
    <CoinNegetiveChange>{priceChange}</CoinNegetiveChange>
  ) : (
    <CoinPositiveChange>+{priceChange}</CoinPositiveChange>
  );
};
