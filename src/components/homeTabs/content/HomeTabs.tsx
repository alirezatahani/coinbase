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
  const { TabPane } = Tabs;

  const handleChange = (value: string) => {
    setTimePeriod(value);
  };

  return (
    <>
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
                  <FavoriteCoins timePeriod={timePeriod} />
                </TabPane>
              );

            default:
              return (
                <TabPane tab={name} key={key}>
                  <GetCoinsData queries={{ ...queries, timePeriod, limit }} />
                </TabPane>
              );
          }
        })}
      </Tabs>
    </>
  );
};

export default HomeTabs;
