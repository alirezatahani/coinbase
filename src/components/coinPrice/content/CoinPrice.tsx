import * as React from "react";
import { CoinPriceSectionProps } from "./coinPrice_types";
import { formatPrice } from "../../../utils/numberToPrice";
import { CoinPrice } from "../style/coinPrice_style";

export const CoinPriceSection: React.FC<CoinPriceSectionProps> = ({
  price,
}) => {
  return <CoinPrice>$ {formatPrice(Number(price))}</CoinPrice>;
};
