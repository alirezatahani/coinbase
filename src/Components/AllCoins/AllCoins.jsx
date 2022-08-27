import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllCoins.css";
import { Button, notification, Space } from "antd";
import { favoriteDataAction } from "../../Redux/Actions/coinAction";
import { debounce } from "lodash";
import { getData } from "../../API/coinApi";

export default function AllCoins() {
  const { coinsData, favoriteData } = useSelector(
    (state) => state.coinsReducer
  );
  const dispatch = useDispatch();

  const openNotificationWithIcon = (type, name) => {
    notification[type]({
      message: `${name} added`,
      duration: 1,
    });
  };

  const action = (e) => {
    try {
      dispatch(getData(e));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handler = useCallback(debounce(action, 100), []);

  function handleFilter(e) {
    handler(e.target.value);
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
          {coinsData.length !== 0 ? (
            <></>
          ) : (
            <tr>
              <th>Rank</th>
              <th>Icon</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          )}

          {coinsData.length != 0 ? (
            coinsData.data.coins.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.rank}</td>
                  <td>
                    <img src={item.iconUrl} style={{ width: 40 }} />
                  </td>
                  <td>{item.name}</td>
                  <td>${Number(item.price).toFixed(3)}</td>
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
            <></>
          )}
        </table>
      </div>
    </div>
  );
}
