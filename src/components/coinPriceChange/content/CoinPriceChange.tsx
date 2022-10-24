import * as React from "react";
import { CoinPriceChangeProps } from "./coinPriceChange_types";
import { PriceChangeContainer } from "../style/coinPriceChange_style";

export const CoinPriceChangeSection: React.FC<CoinPriceChangeProps> = ({
  priceChange,
}) => {
  if (priceChange === 0)
    return (
      <PriceChangeContainer priceChange={priceChange}>0</PriceChangeContainer>
    );
  return priceChange < 0 ? (
    <PriceChangeContainer priceChange={priceChange}>
      {priceChange}%
    </PriceChangeContainer>
  ) : (
    <PriceChangeContainer priceChange={priceChange}>
      +{priceChange}%
    </PriceChangeContainer>
  );
};
