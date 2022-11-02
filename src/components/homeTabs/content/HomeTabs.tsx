import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { FavoriteCoins } from "@modules/index";
import { GetCoinsData } from "@modules/index";
import { tabs } from "../utils/tabs";
import { Badge, FlexWrapperBadge } from "../style/HomeTabs_styles";

const HomeTabs = () => {
  const [limit, setLimit] = useState(10);
  const { TabPane } = Tabs;
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;
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
                <GetCoinsData queries={{ ...queries, limit }} />
              </TabPane>
            );
        }
      })}
    </Tabs>
  );
};

export default HomeTabs;
