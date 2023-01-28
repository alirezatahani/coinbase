import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import useFetch from "../../../hooks/useFetch";
import { CoinList, HomeTabs } from "@components/index";
import { ActionBar } from "@components/actionBar";
import { OptionInterface } from "@components/actionBar/content/actionBar_type";
import "antd/dist/antd.css";
import { HomeStyle, Input } from "../style/home_styles";
import { useSelector } from "react-redux";

const Home = () => {
  const referenceCurrency = useSelector((state: any) => state.referenceCurrency);
  const [searchCoin, setSearchCoin] = useState("");
  const [{ loading, data }, doSearchCoin] = useFetch();
  const [timePeriod, setTimePeriod] = useState("24h");
  
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

  const timePeriodeHandler: (value: string) => void = (value: string) => {
    setTimePeriod(value);
  };
  
  return (
    <HomeStyle>
      <Input
        placeholder="Search..."
        onChange={(e) => searchHandler(e.target.value)}
      />
      {searchCoin ? null : (
        <ActionBar
          handleTimePeriod={timePeriodeHandler}
          currency={referenceCurrency.value}
        />
      )}
      {searchCoin ? (
        <CoinList
          loading={loading}
          data={data && data.data.coins}
          currencySign={"$"}
        />
      ) : (
        <HomeTabs currency={referenceCurrency} timePeriod={timePeriod} />
      )}
    </HomeStyle>
  );
};

export default Home;
