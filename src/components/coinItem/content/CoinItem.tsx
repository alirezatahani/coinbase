import * as React from "react";
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
    </div>
  );
};

export default CoinItem;
