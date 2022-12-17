import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { FavoriteCoins } from "@modules/index";
import { GetCoinsData } from "@modules/index";
import { tabs } from "../utils/tabs";
import { Badge, FlexWrapperBadge } from "../style/HomeTabs_styles";
import { Select } from "antd";

const HomeTabs = () => {
  const [limit, setLimit] = useState(10);
  const [timePeriod, setTimePeriod] = useState("24h");
  const { TabPane } = Tabs;
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;
  
  const handleChange = (value: string ) => {
    console.log(`Selected: ${value}`);
    setTimePeriod(value)
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
                <TabPane
                  tab={
                    <FlexWrapperBadge>
                      <span>Favorite Coins</span>
                      <Badge>{favoriteList.length}</Badge>
                    </FlexWrapperBadge>
                  }
                  key={key}
                >
                  <FavoriteCoins />
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
