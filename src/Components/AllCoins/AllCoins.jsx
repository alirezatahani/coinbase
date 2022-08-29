import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Allcoins.css";
import { Button, Modal, notification, Space } from "antd";
import { debounce } from "lodash";
import { getAsyncCoins } from "../../features/coins/coinsSlice";
import { favoriteDataAction } from "../../Redux/Actions/coinAction";
import SetAlert from "../setAlert/content/SetAlert";

export default function AllCoins() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState({});

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

  const handler = useCallback(debounce(action, 600), []);

  function handleFilter(e) {
    handler(e.target.value);
  }

  const addToFavorite = (item, name) => {
    dispatch(favoriteDataAction(item));
    openNotificationWithIcon("success", name);
  };

  
  const showModal = (item) => {
    setSelectedCoin(item);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
