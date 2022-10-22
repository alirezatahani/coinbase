import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { CoinList } from "@components/coinsList/index"

export default function LoserCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  useEffect(() => {
    doFetch({
      url: "/coins?offset=0&orderBy=change&limit=50&orderDirection=asc&referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&search=&scopeLimit=10&scopeId=marketCap",
      method: "get",
    });
  }, []);

  return <CoinList loading={loading} data={data && data.data.coins} />;
}
