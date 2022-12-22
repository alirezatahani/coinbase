import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import { Button, Select, Tooltip } from "antd";
import { CoinList, HomeTabs } from "@components/index";
import { HomeProps } from "./Home_type_d";
import useFetch from "../../../hooks/useFetch";
import { options } from "../utils/selectOptions";
import "antd/dist/antd.css";
import { ActionbarContainer, HomeStyle, Input } from "../style/home_styles";
import { theme } from "@global/Global";

interface OptionInterface {
  value: string;
  sign: string;
  label: string;
}

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
          <Tooltip title="Change currency">
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
          </Tooltip>
          <Tooltip title="Change time period">
            <Select
              defaultValue="24h"
              onChange={handleChange}
              style={{ width: 110 }}
              options={options}
            />
          </Tooltip>
          <Tooltip title="Change theme">
            <Button onClick={themeHandler}>
              {userTheme === "light" ? "Dark" : "Light"}
            </Button>
          </Tooltip>
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
