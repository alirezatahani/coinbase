import * as React from "react";
import { CoinInterface } from "types";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice/content/CoinPrice";
import { CoinPriceChangeSection } from "@components/coinPriceChange";
import { CoinDesc, CoinName } from "../style/coinItem_style";

const CoinItem: React.FC<CoinInterface> = ({ name, ...props }) => {
  const { iconUrl, change, price, uuid } = props;
  return (
    <div style={{ display: "flex" }}>
      <CoinDesc>
        <img src={iconUrl} style={{ width: 40 }} />
        <CoinName> {name}</CoinName>
      </CoinDesc>
      <CoinPriceSection price={price} />
      <CoinPriceChangeSection priceChange={change} />
      <AddToFavoriteSection
        change={change}
        iconUrl={iconUrl}
        name={name}
        price={price}
        uuid={uuid}
      />
    </div>
  );
};

export default CoinItem;
