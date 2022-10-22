import * as React from "react";
import {
  CoinNegetiveChange,
  CoinPositiveChange,
} from "../styles/coinPriceChange_style";

export const CoinPriceChangeSection = (props: any) => {
  const priceChange = props.props;
  return priceChange === null ? (
    <CoinNegetiveChange>0</CoinNegetiveChange>
  ) : priceChange.includes("-") ? (
    <CoinNegetiveChange>{priceChange}</CoinNegetiveChange>
  ) : (
    <CoinPositiveChange>+{priceChange}</CoinPositiveChange>
  );
};
