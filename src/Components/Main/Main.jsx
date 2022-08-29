import React from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import FavCoins from "../FavCoins/FavCoins";
import AllCoins from "../AllCoins/AllCoins";

//
const Main = () => {
  const { favCoins } = useSelector((state) => state.favCoins);

  const { TabPane } = Tabs;

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <AllCoins />
        </TabPane>
        <TabPane
          tab={
            <div className="flex">
              <span>Favorite Coins</span>
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#04aa6d",
                  textAlign: "center",
                  borderRadius: "50%",
                  color: "white",
                  marginLeft: 6,
                  fontSize: 13,
                }}
              >
                {favCoins.length}
              </div>
            </div>
          }
          key="2"
        >
          <FavCoins />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Main;
