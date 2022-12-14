import * as React from "react";
import { CoinInterface } from "types";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice/content/CoinPrice";
import { CoinPriceChangeSection } from "@components/coinPriceChange";
import { CoinDesc, CoinName, CoinContent } from "../style/coinItem_style";
import { useRouter } from "@utils/router";

const CoinItem: React.FC<CoinInterface> = ({ name, ...props }) => {
  const { iconUrl, change, price, uuid } = props;
  const{ goTo} = useRouter()
  return (
    <CoinContent >
      <CoinDesc onClick={()=>{goTo(`:${uuid}`)}}>
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
    </CoinContent>
  );
};

export default CoinItem;
