import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Allcoins.css";
import { Button, notification, Space } from "antd";
import { debounce } from "lodash";
import { getAsyncCoins } from "../../features/coins/coinsSlice";
import { favoriteDataAction } from "../../Redux/Actions/coinAction";

export default function AllCoins() {
  const { coins } = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  const openNotificationWithIcon = (type, name) => {
    notification[type]({
      message: `${name} added`,
      duration: 1,
    });
  };

  const action = (e) => {
    try {
      dispatch(getAsyncCoins(e));
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
          {coins && coins.data && coins.data.coins.length !== 0 && (
            <tr>
              <th>Rank</th>
              <th>Icon</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          )}

          {coins &&
            coins.data &&
            coins.data.coins.map((item, index) => {
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
            })}
        </table>
      </div>
    </div>
  );
}
