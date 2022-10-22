import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { CoinList } from "@components/coinsList/index"

export default function NewCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  useEffect(() => {
    doFetch({
      url: "/coins?offset=0&orderBy=listedAt&limit=10&orderDirection=desc&referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&search=",
      method: "get",
    });
  }, []);

  return <CoinList loading={loading} data={data && data.data.coins} />;
}
