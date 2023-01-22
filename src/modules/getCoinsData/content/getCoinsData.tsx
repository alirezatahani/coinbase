import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { CoinList } from "@components/index";
import { Spin } from "antd";
import { convertToQuery } from "@utils/queries";
import { GetCoinsDataProps } from "../getCoinsData_type";
import useInfiniteScroll from "hooks/useInfiniteScroll";

export const GetCoinsData: React.FC<GetCoinsDataProps> = ({ queries }) => {
  const [{ loading, data, error }, fetchCoinsData] = useFetch();
  const [coinData, setCoinData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [ref, setIsFetching] = useInfiniteScroll(loadMoreData);

  const makingUrl = () => {
    return convertToQuery({ ...queries, offset });
  };
  const loadData = () => {
    const url = makingUrl();
    fetchCoinsData({ url: `/coins?${url}`, method: "get" });
  };
  function loadMoreData() {
    if (hasMore) {
      setOffset((prevState) => prevState + queries.limit);
      loadData();
      setIsFetching(false);
    }
  }

  useEffect(() => {
    setCoinData([...coinData, ...data]);
    if (!loading && !error && data) {
      if (data.length < queries.limit) setHasMore(false);
    }
  }, [data]);

  return (
    <>
      <CoinList data={coinData} />
      <div ref={ref}>{hasMore && loading && !error ? <Spin /> : ""}</div>
    </>
  );
};
