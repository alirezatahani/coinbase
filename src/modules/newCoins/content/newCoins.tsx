import React, { useEffect } from "react";
import {
  TableContent,
  CoinsStyle,
  TableContentPrice,
} from "../style/newCoins_styles";
import { formatPrice } from "@modules/allCoins/utils/formatPrice";
import Spinner from "@components/spin/spin";
import useFetch from "../../../hooks/useFetch";

export default function NewCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  useEffect(() => {
    doFetch({
      url: "/coins?offset=0&orderBy=listedAt&limit=50&orderDirection=desc&referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&search=",
      method: "get",
    });
  }, []);

  console.log(data, "new");

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
              </CoinsStyle>
            );
          }
        )
      )}
    </div>
  );
}
