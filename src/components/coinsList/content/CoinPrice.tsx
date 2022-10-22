import * as React from "react";
import { formatPrice } from "../utils/formatPrice";
import { CoinPrice } from "../styles/coinPrice_style";
import { CoinPriceProps } from "../types/coinPrice_types";

export const CoinPriceSection: React.FC<CoinPriceProps> = ({ price }) => {
  return <CoinPrice>$ {formatPrice(Number(price))}</CoinPrice>;
};
