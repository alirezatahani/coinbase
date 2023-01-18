import * as React from "react";
import { CoinInterface } from "types";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice/content/CoinPrice";
import { CoinPriceChangeSection } from "@components/coinPriceChange";
import { CoinDesc, CoinName, CoinContent } from "../style/coinItem_style";

const CoinItem: React.FC<CoinInterface> = ({ ...coin }) => {
  const { iconUrl, change, price ,name} = coin;
  return (
    <CoinContent>
      <CoinDesc>
        <img src={iconUrl} style={{ width: 40 }} />
        <CoinName> {name}</CoinName>
      </CoinDesc>
      <CoinPriceSection price={price} />
      <CoinPriceChangeSection priceChange={change} />
      <AddToFavoriteSection
        {...coin}
      />
    </CoinContent>
  );
};

export default CoinItem;
