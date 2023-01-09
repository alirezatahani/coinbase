import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { CoinList } from "@components/index";
import { convertToQuery } from "@utils/queries";
import { GetCoinsDataProps } from "../getCoinsData_type";
import { Pagination } from "antd";
import { Container } from "../style/getCoinData_style";

export const GetCoinsData: React.FC<GetCoinsDataProps> = ({
  queries,
  handleOffset,
}) => {
  const [{ loading, data }, fetchCoinsData] = useFetch();
  const { offset, limit } = queries;
  const total = data?.data?.stats?.total;

  const makingUrl = () => {
    return convertToQuery(queries);
  };

  const handleChange = (page: number) => {
    handleOffset(page);
  };

  useEffect(() => {
    const url = makingUrl();
    fetchCoinsData({ url: `/coins?${url}`, method: "get" });
  }, [offset]);

  return (
    <Container>
      <CoinList loading={loading} data={data && data.data.coins} />
      <Pagination
        defaultCurrent={1}
        pageSize={limit}
        total={total}
        size="small"
        onChange={handleChange}
      />
    </Container>
  );
};
