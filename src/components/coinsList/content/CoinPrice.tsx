import * as React from "react";
import { CoinPriceSectionProps } from "../types/coinPrice_types";
import { formatPrice } from "../../../utils/numberToPrice";
import { CoinPrice } from "../styles/coinPrice_style";

export const CoinPriceSection: React.FC<CoinPriceSectionProps> = ({
  price,
}) => {
  return <CoinPrice>$ {formatPrice(Number(price))}</CoinPrice>;
};
