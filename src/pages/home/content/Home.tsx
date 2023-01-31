import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import useFetch from "../../../hooks/useFetch";
import { CoinList, HomeTabs } from "@components/index";
import { ActionBar } from "@components/actionBar";
import "antd/dist/antd.css";
import { HomeStyle, Input } from "../style/home_styles";

const Home = () => {
  const [searchCoin, setSearchCoin] = useState("");
  const [{ loading, data }, doSearchCoin] = useFetch();

  const searchingCoin = async (searchValue: string) => {
    try {
      await doSearchCoin({
        url: `/search-suggestions?query=${searchValue}`,
        method: "GET",
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
      {searchCoin ? null : <ActionBar />}
      {searchCoin ? (
        <CoinList
          loading={loading}
          data={data && data.data.coins}
          currencySign={"$"}
        />
      ) : (
        <HomeTabs />
      )}
    </HomeStyle>
  );
};

export default Home;
