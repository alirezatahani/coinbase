import * as React from "react";
import { CoinInterface } from "types";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice/content/CoinPrice";
import { CoinPriceChangeSection } from "@components/coinPriceChange";
import { CoinDesc, CoinName, CoinContent } from "../style/coinItem_style";

const CoinItem: React.FC<CoinInterface> = ({ name, ...props }) => {
  const { iconUrl, change, price, uuid, currencySign } = props;
  return (
    <CoinContent>
      <CoinDesc>
        <img src={iconUrl} style={{ width: 40 }} />
        <CoinName> {name}</CoinName>
      </CoinDesc>
      <CoinPriceSection price={price} currencySign={currencySign} />
      <CoinPriceChangeSection priceChange={change} />
      <AddToFavoriteSection uuid={uuid} />
    </CoinContent>
  );
};

export default CoinItem;
