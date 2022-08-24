import { Tabs } from "antd";
import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./Tab.css";
import Main from "../Main/Main";

const { TabPane } = Tabs;

const Tab = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="All" key="1">
      <Main />
    </TabPane>
    <TabPane tab="Favorite" key="2">
      Favorite
    </TabPane>
  </Tabs>
);

export default Tab;
