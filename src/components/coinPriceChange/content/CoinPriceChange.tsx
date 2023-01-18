import * as React from "react";
import { PriceChangeContainer } from "../style/coinPriceChange_style";
import { CoinPriceChangeProps } from "./coinPriceChange_types";

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
