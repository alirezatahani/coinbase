import React, { useEffect } from "react";
import {
  CoinsStyle,
  CoinsTitleStyle,
  TableContent,
  TableContentPrice,
  TableTitle,
} from "../style/allCoins_styles";
import useFetch from "../../../../src/hooks/useFetch";
import Spinner from "@components/spin/spin";

export default function AllCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  useEffect(() => {
    doFetch({ url: "/coins?limit=10", method: "get" });
  }, []);

  return (
    <div>
      <CoinsTitleStyle>
        <TableTitle>Icon</TableTitle>
        <TableTitle>Name</TableTitle>
        <TableTitle>Price</TableTitle>
      </CoinsTitleStyle>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.data.coins.map((coin: any, index: number) => {
          return (
            <CoinsStyle key={index}>
              <>
                <div>
                  <img src={coin.iconUrl} style={{ width: 40 }} />
                </div>
                <TableContent> {coin.name}</TableContent>
                <TableContentPrice>
                  ${Number(coin.price).toFixed(3)}
                </TableContentPrice>
              </>
            </CoinsStyle>
          );
        })
      )}
    </div>
  );
}
