import React from "react";
import {  useDispatch } from "react-redux/es/exports";
import { Tabs } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import FavCoins from "../FavCoins/FavCoins";
import AllCoins from "../AllCoins/AllCoins";
import SetAlert from "../setAlert/content/SetAlert";
import { AlertsTable } from "../setAlert/content/AlertsTable";

//
const Main = () => {
  const dispatch = useDispatch();

  // const { favoriteData } = useSelector((state) => state.coinsReducer);


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
                {/* {favoriteData.length} */}
              </div>
            </div>
          }
          key="2"
        >
          <FavCoins />
        </TabPane>
        <TabPane tab="Alerts">
          <AlertsTable/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Main;
