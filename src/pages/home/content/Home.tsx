import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import useFetch from "../../../hooks/useFetch";
import { CoinList, HomeTabs } from "@components/index";
import { ActionBar } from "@components/actionBar";
import "antd/dist/antd.css";
import { HomeStyle, Input } from "../style/home_styles";
import { useAppSelector } from "hooks/hooks";

const Home = () => {
  const [searchCoin, setSearchCoin] = useState("");
  const [{ loading, data }, doSearchCoin] = useFetch();
  const {value,sign} = useAppSelector((state)=>state.referenceCurrency)

  const searchingCoin = async (searchValue: string) => {
    try {
      await doSearchCoin({
        url: `/search-suggestions?query=${searchValue}&referenceCurrencyUuid=${value}`,
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
          error={error}
          searchCoin={searchCoin}
          data={data && data.data.coins}
          currencySign={sign}
        />
      ) : (
        <HomeTabs />
      )}
    </HomeStyle>
  );
};

export default Home;
