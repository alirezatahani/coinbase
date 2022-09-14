import { Tabs } from "antd";
import { Badge, FlexWrapperBadge, HomeStyle } from "../style/home_styles";
import { useSelector } from "react-redux";
import React from "react";
import AllCoins from "@modules/allCoins/content/allCoins";
import NewCoins from "@modules/newCoins/content/newCoins";
import "antd/dist/antd.css";
import FavoriteCoins from "@modules/Favorites/content/favoriteCoins";

export default function Home() {
  const { TabPane } = Tabs;

  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  return (
    <HomeStyle>
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <AllCoins />
        </TabPane>
        <TabPane
          tab={
            <FlexWrapperBadge>
              <span>Favorite Coins</span>
              <Badge>{favoriteList.length}</Badge>
            </FlexWrapperBadge>
          }
          key="2"
        >
          <FavoriteCoins />
        </TabPane>
        <TabPane tab="New" key={3}>
          <NewCoins />
        </TabPane>{" "}
        <TabPane tab="Gainers" key={4}>
          test{" "}
        </TabPane>{" "}
        <TabPane tab="Losers" key={5}>
          test{" "}
        </TabPane>
      </Tabs>
    </HomeStyle>
  );
}
