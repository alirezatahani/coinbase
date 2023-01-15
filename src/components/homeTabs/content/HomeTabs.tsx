import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Pagination, Tabs } from "antd";
import { FavoriteCoins } from "@modules/index";
import { GetCoinsData } from "@modules/index";
import { tabs } from "../utils/tabs";
import { Badge, FlexWrapperBadge } from "../style/HomeTabs_styles";

const HomeTabs = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { TabPane } = Tabs;
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;
  const offsetHandler = (page: number) => {
    setOffset((page - 1) * limit);
  };
  return (
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
                <GetCoinsData
                  queries={{ ...queries, limit, offset }}
                  handleOffset={offsetHandler}
                />
              </TabPane>
            );
        }
      })}
    </Tabs>
  );
};

export default HomeTabs;
