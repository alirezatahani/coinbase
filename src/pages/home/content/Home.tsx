import { Tabs } from "antd";
import { HomeStyle } from "../style/home_styles";
import React from "react";
import AllCoins from "@modules/allCoins/content/allCoins";
import "antd/dist/antd.css";

export default function Home() {
  const { TabPane } = Tabs;

  return (
    <HomeStyle>
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <AllCoins />
        </TabPane>
        <TabPane tab="Favorites" key="2">
          test{" "}
        </TabPane>
        <TabPane tab="New" key={3}>
          test{" "}
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
