import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { Select } from "antd";
import { CoinList, HomeTabs } from "@components/index";
import useFetch from "../../../hooks/useFetch";
import { options } from "../utils/selectOptions";
import { ActionbarContainer, HomeStyle, Input } from "../style/home_styles";
import "antd/dist/antd.css";

interface OptionInterface {
  value: string;
  sign: string;
  label: string;
}

const Home = () => {
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

  const handleChange = (value: string) => {
    setTimePeriod(value);
  };
  const handleCurrency = (value: string, options: OptionInterface) => {
    setCurrency({ value, sign: options.sign });
  };
  

  return (
    <HomeStyle>
      <Input
        placeholder="Search..."
        onChange={(e) => searchHandler(e.target.value)}
      />
      {searchCoin ? null : (
        <ActionbarContainer>
          <Select
            defaultValue="yhjMzLPhuIDl"
            onChange={(value: string, options: any) =>
              handleCurrency(value, options)
            }
            style={{ width: 100 }}
            options={[
              { value: "yhjMzLPhuIDl", label: "USD", sign: "$" },
              { value: "5k-_VTxqtCEI", label: "EUR", sign: "€" },
            ]}
          />
          <Select
            defaultValue="24h"
            onChange={handleChange}
            style={{ width: 110 }}
            options={options}
          />
        </ActionbarContainer>
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
