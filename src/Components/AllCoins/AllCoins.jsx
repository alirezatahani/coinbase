import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Space } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { debounce } from "lodash";
import "./Allcoins.css";
import SetAlert from "../setAlert/content/SetAlert";
import { GetTimeAsNumber } from "../setAlert/utils/getTime";
import { getAsyncCoins } from "../../features/coins/coinsSlice";
import { createUuidQuery } from "../../utils/createUuidQuery";
import {
  getAsyncAlertsCoins,
  removeFromAlerts,
} from "../../features/alerts/alertsSlice";
import { showNotification } from "../../utils/notificationConfig";
import { addToFavCoins } from "../../features/favCoins/favCoinsSlice";

export default function AllCoins() {
  const [intervalId, setIntervalId] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState({});

  const { coins } = useSelector((state) => state.coins);
  const alerts = useSelector((state) => state.alerts.alerts);
  const favCoins = useSelector((state) => state.favCoins.favCoins);
  const { alertedCoinData } = useSelector((state) => state.alerts);

  const dispatch = useDispatch();

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

  const addToFavorite = (item) => {
    dispatch(addToFavCoins(item));
    showNotification(favCoins.some((coin) => coin.name === item.name) ?"error":"success", item);
  };

  const showModal = (item) => {
    setSelectedCoin(item);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
          {coins && coins.data && coins.data.coins.length !== 0 && (
            <tr>
              <th>Icon</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          )}

          {coins &&
            coins.data &&
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
                      <Button onClick={() => showModal(item)}>set alert</Button>
                    </Space>
                  </td>
                </tr>
              );
            })}
        </table>
        <Modal
          title={`Create Alert on ${selectedCoin.name}`}
          onCancel={handleCancel}
          visible={isModalVisible}
          footer={null}
        >
          <SetAlert coin={selectedCoin} closeModal={handleCancel} />
        </Modal>
      </div>
    </div>
  );
}
