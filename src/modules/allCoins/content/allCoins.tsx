import React, { useEffect } from "react";
import useFetch from "../../../../src/hooks/useFetch";
import { CoinList } from "@components/coinsList/content/CoinListContainer";

export default function AllCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  useEffect(() => {
    doFetch({ url: "/coins?limit=10", method: "get" });
  }, []);

  return <CoinList loading={loading} data={data && data.data.coins} />;
}
