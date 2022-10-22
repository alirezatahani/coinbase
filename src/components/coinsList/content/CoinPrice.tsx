import * as React from "react";
import { formatPrice } from "../utils/formatPrice";
import { CoinPrice } from "../styles/coinPrice_style";

export const CoinPriceSection = (props: any) => {
  const price = props.props;
  return <CoinPrice>{formatPrice(Number(price))} $</CoinPrice>;
};
