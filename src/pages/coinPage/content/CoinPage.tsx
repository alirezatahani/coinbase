import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import useFetch from "../../../hooks/useFetch";
import { CoinDetail } from "@components/index";
import { CoinDetailPage } from "../style/coinPage_style";

const CoinPage = () => {
  const query = useSelector((state: any) => state.stack.query);
  const referenceCurrency = useSelector(
    (state: any) => state.referenceCurrency
  );
  const [{ loading, data }, getCoinData] = useFetch();

  useEffect(() => {
    getCoinData({
      url: `/coin/${query}?referenceCurrencyUuid=${referenceCurrency.value}`,
      method: "get",
    });
  }, []);

  return (
    <CoinDetailPage>
      {loading ? (
        <Spin />
      ) : data && data.data.coin ? (
        <CoinDetail coinData={data.data.coin} sign={referenceCurrency.sign}/>
      ) : null}
    </CoinDetailPage>
  );
};

export default CoinPage;
