import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { CoinList } from "@components/index";
import { convertToQuery } from "@utils/queries";
import { GetCoinsDataProps } from "../getCoinsData_type";

export const GetCoinsData: React.FC<GetCoinsDataProps> = ({ queries }) => {
  const [{ loading, data, error }, fetchCoinsData] = useFetch();
  const [offset, setOffset] = useState(0);
  const [coinData, setCoinData] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const makingUrl = () => {
    return convertToQuery({ ...queries, offset });
  };
  const handleOffset = () => {
    setOffset((prevState) => prevState + queries.limit);
  };
  
  useEffect(() => {
    const url = makingUrl();
    fetchCoinsData({ url: `/coins?${url}`, method: "get" });
    if (!loading && !error && data) {
      if (data.length < queries.limit) setHasMore(false);
    }
  }, [offset]);

useEffect(()=>{
  setCoinData([...coinData,...data])
},[data])

  return (
    <CoinList
      error={error}
      loading={loading}
      data={coinData}
      handleOffset={handleOffset}
      hasMore={hasMore}
    />
  );
};
