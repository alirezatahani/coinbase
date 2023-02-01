import * as React from "react";
import { CoinPriceSectionProps } from "./coinPrice_types";
import { numberToPrice } from "@utils/numberToPrice";
import { CoinPrice } from "../style/coinPrice_style";

export const CoinPriceSection: React.FC<CoinPriceSectionProps> = ({
  price,
  currencySign,
}) => {
  return <CoinPrice>{numberToPrice(Number(price), currencySign)}</CoinPrice>;
};
