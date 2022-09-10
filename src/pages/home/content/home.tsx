import { Tabs } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { HomesStyle } from "../style/home_styles";
import React from "react";

export default function Home() {
  const { TabPane } = Tabs;

  return (
    <HomesStyle>
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          All
        </TabPane>
        <TabPane tab="favorite" key="2">
          Favorite
        </TabPane>
        <TabPane tab="new" key="3">
          New
        </TabPane>
        <TabPane tab="gainer" key="4">
          Gainer
        </TabPane>
        <TabPane tab="loser" key="5">
          Loser
        </TabPane>
      </Tabs>
    </HomesStyle>
  );
}
