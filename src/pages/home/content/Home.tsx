import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import useFetch from "../../../hooks/useFetch";
import { CoinList, HomeTabs } from "@components/index";
import { HomeProps } from "./Home_type_d";
import { ActionBar } from "@components/actionBar";
import { OptionInterface } from "@components/actionBar/content/actionBar_type";
import "antd/dist/antd.css";
import { HomeStyle, Input } from "../style/home_styles";

const Home: React.FC<HomeProps> = ({ userTheme, themeHandler }) => {
  const [searchCoin, setSearchCoin] = useState("");
  const [{ loading, data }, doSearchCoin] = useFetch();
  const [timePeriod, setTimePeriod] = useState("24h");
  const [currency, setCurrency] = useState({
    value: "yhjMzLPhuIDl",
    sign: "$",
  });

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
  const currencyHandler: (value: string, options: OptionInterface) => void = (
    value: string,
    options: OptionInterface
  ) => {
    setCurrency({ value, sign: options.sign });
  };

  return (
    <HomeStyle>
      <Input
        placeholder="Search..."
        onChange={(e) => searchHandler(e.target.value)}
      />
      {searchCoin ? null : (
        <ActionBar
          themeHandler={themeHandler}
          userTheme={userTheme}
          handleTimePeriod={timePeriodeHandler}
          handleCurrency={currencyHandler}
        />
      )}
      {searchCoin ? (
        <CoinList
          loading={loading}
          data={data && data.data.coins}
          currencySign={"$"}
        />
      ) : (
        <HomeTabs currency={currency} timePeriod={timePeriod} />
      )}
    </HomeStyle>
  );
};

export default Home;
