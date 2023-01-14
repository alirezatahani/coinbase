import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import { CoinList, HomeTabs } from "@components/index";
import useFetch from "../../../hooks/useFetch";
import { HomeStyle, Input } from "../style/home_styles";
import "antd/dist/antd.css";

export default function Home() {
  const [searchCoin, setSearchCoin] = useState("");
  const [{ loading, data, error }, doSearchCoin] = useFetch();

  const searchingCoin = async (searchValue: string) => {
    try {
      await doSearchCoin({
        url: `/search-suggestions?query=${searchValue}`,
        method: "GET",
        getBy: "searching",
      });
    } catch (e) {}
  };
  const handler = useCallback(debounce(searchingCoin, 600), []);
  const searchHandler = (searchValue: string) => {
    setSearchCoin(searchValue);
    handler(searchValue);
  };

  return (
    <HomeStyle>
      <Input
        placeholder="Search..."
        onChange={(e) => searchHandler(e.target.value)}
      />
      {searchCoin ? (
        <CoinList
          loading={loading}
          data={data}
          error={error}
          searchCoin={searchCoin}
        />
      ) : (
        <HomeTabs />
      )}
    </HomeStyle>
  );
}
