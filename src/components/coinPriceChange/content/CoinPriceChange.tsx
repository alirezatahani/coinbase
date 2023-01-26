import * as React from "react";
import { CoinPriceChangeProps } from "./coinPriceChange_types";
import { PriceChangeContainer } from "../style/coinPriceChange_style";

export const CoinPriceChangeSection: React.FC<CoinPriceChangeProps> = ({
  priceChange,
}) => {
  return (
    <PriceChangeContainer priceChange={priceChange}>
      {priceChange === 0
        ? 0
        : priceChange > 0
        ? `${priceChange}%`
        : `${priceChange}%`}
    </PriceChangeContainer>
  );
};
