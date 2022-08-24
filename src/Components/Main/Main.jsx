import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./Main.css";
import { Tabs } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button, notification, Space } from "antd";
import { getData } from "../../API/coinApi";

//
const Main = () => {
  const [filterData, setFilterData] = useState([]);
  const [newFilter, setNewFilter] = useState([]);
  const [data, setData] = useState(null);
  const [favorite, setFavorite] = useState([]);

  const dispatch = useDispatch();

  const { coinsData } = useSelector((state) => state.coinsReducer);
  console.log(coinsData, "redux");

  useEffect(() => {
    dispatch(getData());
  }, []);

  const openNotificationWithIcon = (type, name) => {
    notification[type]({
      message: `${name} added`,
    });
  };

  function handleFilter(e) {
    setNewFilter(
      data.data.coins.filter((value) => {
        return value.name?.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );

    if (e.target.value == "") {
      return setFilterData([]);
    } else {
      return setFilterData(newFilter);
    }
  }

  const addToFavorite = (item, name) => {
    setFavorite((favorite) => [...favorite, item]);
    openNotificationWithIcon("success", name);
  };
  const { TabPane } = Tabs;

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <div id="box-wrapper">
            <div className="box-title">
              <h2>CoinRanking</h2>
            </div>
            <div id="input-wrapper">
              <form>
                <input
                  type="search"
                  className="input-style"
                  placeholder="do search"
                  onChange={handleFilter}
                />
              </form>
            </div>

            <table>
              {filterData.length == 0 ? (
                <div></div>
              ) : (
                <tr>
                  <th>Rank</th>
                  <th>Icon</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Change</th>
                  <th></th>
                </tr>
              )}

              {filterData.length != 0 ? (
                filterData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.rank}</td>
                      <td>
                        <img src={item.iconUrl} style={{ width: 40 }} />
                      </td>
                      <td>{item.name}</td>
                      <td>${Number(item.price).toFixed(3)}</td>
                      <td>{item.change}%</td>
                      <td>
                        <Space>
                          <Button
                            onClick={() => addToFavorite(item, item.name)}
                          >
                            addToFavorite
                          </Button>
                        </Space>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div></div>
              )}
            </table>
          </div>
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
                {favorite.length}
              </div>
            </div>
          }
          key="2"
        >
          <table>
            {favorite.length == 0 ? (
              <div></div>
            ) : (
              <tr>
                <th>Rank</th>
                <th>Icon</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
              </tr>
            )}

            {favorite.length != 0 ? (
              favorite.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.rank}</td>
                    <td>
                      <img src={item.iconUrl} style={{ width: 40 }} />
                    </td>
                    <td>{item.name}</td>
                    <td>${Number(item.price).toFixed(3)}</td>
                    <td>{item.change}%</td>
                  </tr>
                );
              })
            ) : (
              <div>You didn't choose any coins</div>
            )}
          </table>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Main;
