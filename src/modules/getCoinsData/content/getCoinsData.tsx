import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { CoinList } from "@components/coinsList";
import { GetCoinsDataProps } from "../getCoinsData_type";
import { convertToQuery } from "../../../utils/queries";

export const GetCoinsData: React.FC<GetCoinsDataProps> = ({ queries }) => {
  const [{ loading, data }, fetchCoinsData] = useFetch();

  const makingUrl = () => {
    return convertToQuery(queries);
  };

  useEffect(() => {
    const url = makingUrl();
    fetchCoinsData({ url: url, method: "get" });
  }, []);

  return <CoinList loading={loading} data={data && data.data.coins} />;
};
