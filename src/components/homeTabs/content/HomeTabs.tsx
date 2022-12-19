import React, { useState } from "react";
import { Tabs, Select } from "antd";
import { FavoriteCoins } from "@modules/index";
import { GetCoinsData } from "@modules/index";
import FavLengthBadge from "./FavLengthBadge";
import { tabs } from "../utils/tabs";
import { options } from "../utils/selectOptions";

const HomeTabs = () => {
  const [limit, setLimit] = useState(10);
  const [timePeriod, setTimePeriod] = useState("24h");
  const [currency, setCurrency] = useState({
    value: "yhjMzLPhuIDl",
    sign: "$",
  });
  const { TabPane } = Tabs;

  const handleChange = (value: string) => {
    setTimePeriod(value);
  };
  const handleCurrency = (value: string, options: OptionInterface) => {
    console.log(options.sign);
    setCurrency({ value, sign: options.sign });
  };
  interface OptionInterface {
    value: string;
    sign: string;
    label: string;
  }
  return (
    <>
      <Select
        defaultValue="yhjMzLPhuIDl"
        onChange={(value: string, options: any) =>
          handleCurrency(value, options)
        }
        style={{ width: 120 }}
        options={[
          { value: "yhjMzLPhuIDl", label: "USD", sign: "$" },
          { value: "5k-_VTxqtCEI", label: "EUR", sign: "€" },
        ]}
      />
      <Select
        defaultValue="24h"
        onChange={handleChange}
        style={{ width: 120 }}
        options={options}
      />
      <Tabs>
        {tabs.map((tab) => {
          const { key, name, queries } = tab;
          switch (name) {
            case "Favorite Coins":
              return (
                <TabPane tab={<FavLengthBadge />} key={key}>
                  <FavoriteCoins
                    timePeriod={timePeriod}
                    referenceCurrencyUuid={currency.value}
                    currencySign = {currency.sign}
                  />
                </TabPane>
              );

            default:
              return (
                <TabPane tab={name} key={key}>
                  <GetCoinsData
                    queries={{
                      ...queries,
                      timePeriod,
                      limit,
                      referenceCurrencyUuid: currency.value,
                    }}
                    currencySign ={currency.sign}
                  />
                </TabPane>
              );
          }
        })}
      </Tabs>
    </>
  );
};

export default HomeTabs;
