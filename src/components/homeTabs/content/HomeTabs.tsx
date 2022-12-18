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
  const [currency, setCurrency] = useState("yhjMzLPhuIDl");
  const { TabPane } = Tabs;

  const handleChange = (value: string) => {
    setTimePeriod(value);
  };
  const handleCurrency = (value: string) => {
    setCurrency(value);
  };

  return (
    <>
      <Select
        defaultValue="yhjMzLPhuIDl"
        onChange={handleCurrency}
        style={{ width: 120 }}
        options={[
          { value: "yhjMzLPhuIDl", label: "USD" },
          { value: "5k-_VTxqtCEI", label: "EUR" },
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
                    referenceCurrencyUuid={currency}
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
                      referenceCurrencyUuid: currency,
                    }}
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
