import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllCoins.css";
import { Button, notification, Space } from "antd";
import { favoriteDataAction } from "../../Redux/Actions/coinAction";

export default function AllCoins() {
  const [filterData, setFilterData] = useState([]);
  const [newFilter, setNewFilter] = useState([]);
  const { coinsData } = useSelector((state) => state.coinsReducer);
  const dispatch = useDispatch();

  const openNotificationWithIcon = (type, name) => {
    notification[type]({
      message: `${name} added`,
      duration: 1,
    });
  };

  function handleFilter(e) {
    setNewFilter(
      coinsData.data.coins.filter((value) => {
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
    dispatch(favoriteDataAction(item));
    openNotificationWithIcon("success", name);
  };

  return (
    <div>
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
                      <Button onClick={() => addToFavorite(item, item.name)}>
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
    </div>
  );
}
