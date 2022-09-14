import React, { useEffect } from "react";
import {
  CoinsStyle,
  TableContent,
  TableContentChangeMinus,
  TableContentChangePlus,
  TableContentPrice,
} from "../style/gainerCoins_styles";
import { formatPrice } from "@modules/allCoins/utils/formatPrice";
import useFetch from "../../../hooks/useFetch";
import Spinner from "@components/spin/spin";

export default function GainerCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  useEffect(() => {
    doFetch({
      url: "/coins?offset=0&orderBy=change&limit=50&orderDirection=desc&referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&search=&scopeLimit=200&scopeId=marketCap",
      method: "get",
    });
  }, []);

  const checkChangePrice = (change: string) => {
    if (change.includes("-")) {
      return <TableContentChangeMinus>{change}</TableContentChangeMinus>;
    } else {
      return <TableContentChangePlus>+{change}</TableContentChangePlus>;
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.data.coins.map(
          (
            coin: {
              iconUrl: string;
              name: string;
              price: string;
              change: string;
            },
            index: number
          ) => {
            return (
              <CoinsStyle key={index}>
                <div>
                  <img src={coin.iconUrl} style={{ width: 40, height: 40 }} />
                </div>
                <TableContent> {coin.name}</TableContent>
                <TableContentPrice>
                  {formatPrice(Number(coin.price))} $
                </TableContentPrice>
                {checkChangePrice(coin.change)}
              </CoinsStyle>
            );
          }
        )
      )}
    </div>
  );
}
