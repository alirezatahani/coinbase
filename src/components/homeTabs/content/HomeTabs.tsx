import React, { useState } from "react";
import { Tabs, Select } from "antd";
import { FavoriteCoins } from "@modules/index";
import { GetCoinsData } from "@modules/index";
import FavLengthBadge from "./FavLengthBadge";
import { tabs } from "../utils/tabs";

const HomeTabs = () => {
  const [limit, setLimit] = useState(10);
  const [timePeriod, setTimePeriod] = useState("24h");
  const { TabPane } = Tabs;

  const handleChange = (value: string) => {
    setTimePeriod(value);
  };

  return (
    <div>
      <Select
        defaultValue="24h"
        onChange={handleChange}
        style={{ width: 120 }}
        options={[
          {
            value: "1h",
            label: "1 hour",
          },
          {
            value: "3h",
            label: "3 hour",
          },
          {
            value: "12h",
            label: "12 hours",
          },
          {
            value: "24h",
            label: "24 hours",
          },
          {
            value: "7d",
            label: "7 days",
          },
          {
            value: "30d",
            label: "30 days",
          },
          {
            value: "3m",
            label: "3 months",
          },
          {
            value: "1y",
            label: "1 year",
          },
          {
            value: "3y",
            label: "3 years",
          },
          {
            value: "5y",
            label: "5 years",
          },
        ]}
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
    </div>
  );
};

export default HomeTabs;
