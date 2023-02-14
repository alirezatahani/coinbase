import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import { useAppSelector } from "hooks/hooks";
import useFetch from "../../../hooks/useFetch";
import { CoinList, HomeTabs, Footer } from "@components/index";
import { ActionBar } from "@components/actionBar";
import "antd/dist/antd.css";
import { HomeStyle, Input, Main } from "../style/home_styles";

const Home = () => {
  const [searchCoin, setSearchCoin] = useState("");
  const [{ loading, data }, doSearchCoin] = useFetch();
  const { value, sign } = useAppSelector((state) => state.referenceCurrency);

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
      <Main>
        <Input
          placeholder="Search..."
          onChange={(e) => searchHandler(e.target.value)}
        />
        {searchCoin ? null : <ActionBar />}
        {searchCoin ? (
          <CoinList
            loading={loading}
            data={data && data.data.coins}
            currencySign={sign}
          />
        ) : (
          <HomeTabs />
        )}
      </Main>
      <Footer />
    </HomeStyle>
  );
};

export default Home;
