import React, { useEffect } from "react";
import { CoinsStyle, TableContent, TableTitle } from "../style/allCoins_styles";
import useFetch from "../../../../src/hooks/useFetch";
import Spinner from "@components/spin/spin";

export default function AllCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  useEffect(() => {
    doFetch({ url: "/coins?limit=10", method: "get" });
  }, []);

  return (
    <div>
      <CoinsStyle>
        <TableTitle>Icon</TableTitle>
        <TableTitle>Name</TableTitle>
        <TableTitle>Price</TableTitle>
      </CoinsStyle>
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
                <TableContent>${Number(coin.price).toFixed(3)}</TableContent>
              </>
            </CoinsStyle>
          );
        })
      )}
    </div>
  );
}
