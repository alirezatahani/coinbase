import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllCoins.css";
import { Button, notification, Space } from "antd";
import { debounce } from "lodash";
import { getAsyncCoins } from "../../features/coins/coinsSlice";
import { addToFavorite } from "../../features/favCoins/favCoinsSlice";

export default function AllCoins() {
  const { coins } = useSelector((state) => state.coins);
  const { favCoins } = useSelector((state) => state.favCoins);
  const dispatch = useDispatch();

  const addNotification = (type, name) => {
    notification[type]({
      message: `${name} added`,
      duration: 1,
    });
  };
  const isExistNotification = (type, name) => {
    notification[type]({
      message: `${name} was added`,
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

  const handler = useCallback(debounce(action, 600), []);

  function handleFilter(e) {
    handler(e.target.value);
  }

  const favoriteHandler = (item, name) => {
    const isExist = favCoins.find((coin) => coin.name === item.name);
    if (isExist) {
      isExistNotification("error", name);
    } else {
      dispatch(addToFavorite(item));
      addNotification("success", name);
    }
  };

  function checkAlertValid() {
    alerts.map((item, index) => {
      let alertTime = GetTimeAsNumber(item.expirationTime);
      let nowTime = GetTimeAsNumber();
      if (nowTime > alertTime) {
        dispatch(removeFromAlerts(item));
      } else {
        const findCoin = alertedCoinData.data.coins.filter((coin) => {
          return coin.name === item.name;
        });
        switch (item.crossing) {
          case "crossingUp":
            if (findCoin[0].price > item.targetValue) {
              showNotification("warning", item);
              dispatch(removeFromAlerts(item));
            }
            break;
          case "crossingDown":
            if (findCoin[0].price < item.targetValue) {
              showNotification("warning", item);
              dispatch(removeFromAlerts(item));
            }
            break;

          default:
            break;
        }
      }
    });
  }

  useEffect(() => {
    const uuidQuery = createUuidQuery(alerts);
    const myInterval = setInterval(() => {
      dispatch(getAsyncAlertsCoins(uuidQuery));
      alerts.length && checkAlertValid();
    }, 5000);
    setIntervalId(myInterval);
    !alerts.length && clearInterval(myInterval);
    return () => clearInterval(myInterval);
  }, [alertedCoinData, alerts]);

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
          {coins.length != 0 ? (
            coins.data.coins.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.iconUrl} style={{ width: 40 }} />
                  </td>
                  <td>{item.name}</td>
                  <td>${Number(item.price).toFixed(3)}</td>
                  <td>
                    <Space onClick={() => addToFavorite(item)}>
                      {favCoins.some((coin) => coin.name === item.name) ? (
                        <StarFilled />
                      ) : (
                        <StarOutlined />
                      )}
                    </Space>
                  </td>
                  <td>
                    <Space>
                      <Button onClick={() => favoriteHandler(item, item.name)}>
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
