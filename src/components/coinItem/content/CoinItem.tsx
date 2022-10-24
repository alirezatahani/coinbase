import * as React from "react";
import { AddToFavoriteSection } from "@components/addToFav/content/AddToFavorite";
import { CoinInterface } from "types";
import { CoinDesc, CoinName } from "../style/coinItem_style";

const CoinItem: React.FC<CoinInterface> = ({coin}) => {
 const {change,iconUrl,name,price}=coin
  return (
    <div>
      <CoinDesc>
        <img src={iconUrl} style={{ width: 40 }} />
        <CoinName> {name}</CoinName>
      </CoinDesc>
      <AddToFavoriteSection coin={coin} />
    </div>
  );
};

export default CoinItem;
