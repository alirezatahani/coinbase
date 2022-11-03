import * as React from "react";
import { PriceChangeContainer } from "../style/coinPriceChange_style";
import { CoinPriceChangeProps } from "./coinPriceChange_types";

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
