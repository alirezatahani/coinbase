import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { CoinList } from "@components/index";
import { convertToQuery } from "@utils/queries";
import { GetCoinsDataProps } from "../getCoinsData_type";

export const GetCoinsData: React.FC<GetCoinsDataProps> = ({ queries ,currencySign }) => {
  const [{ loading, data }, fetchCoinsData] = useFetch();

  const makingUrl = () => {
    return convertToQuery(queries);
  };
  
  useEffect(() => {
    const url = makingUrl();
    console.log(url);
    
    fetchCoinsData({ url: `/coins?${url}`, method: "get" });
  }, [queries]);

  return <CoinList loading={loading} data={data && data.data.coins} currencySign = {currencySign}/>;
};
