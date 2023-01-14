import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { CoinList } from "@components/index";
import { convertToQuery } from "@utils/queries";
import { GetCoinsDataProps } from "../getCoinsData_type";

export const GetCoinsData: React.FC<GetCoinsDataProps> = ({ queries }) => {
  const [{ hasMore, loading, data, error }, fetchCoinsData] = useFetch();
  const [offset, setOffset] = useState(0);
  const makingUrl = () => {
    return convertToQuery({ ...queries, offset });
  };
  const handleOffset = () => {
    setOffset((prevState) => prevState + queries.limit);
  };
  useEffect(() => {
    const url = makingUrl();
    fetchCoinsData({ url: `/coins?${url}`, method: "get" });
  }, [offset]);

  return (
    <CoinList
      error={error}
      loading={loading}
      data={data}
      hasMore={hasMore}
      handleOffset={handleOffset}
    />
  );
};
