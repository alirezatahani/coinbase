import React, { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  const [filterData, setFilterData] = useState([]);
  const [newFilter, setNewFilter] = useState([]);
  const [data, setData] = useState(null);
  const [favorite, setFavorite] = useState([]);

  const baseUrl = "https://api.coinranking.com/v2/coins";
  const apiKey = "coinranking369971eebd30ea4d94a91d301bd9fb9099e6792808fd718c";

  useEffect(() => {
    async function getData() {
      fetch(baseUrl, {
        method: "GET",
        headers: {
          "x-access-token": apiKey,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    getData();
  }, []);

  console.log("Success:", data);
  console.log(filterData, "filtered");
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

  const addToFavorite = (item) => {
    setFavorite((prevItem) => [...prevItem, item]);
  };

  return (
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

        {filterData.length != 0 &&
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
                  <button
                    className="favBtn"
                    onClick={() => addToFavorite(item)}
                  >
                    add to favorite
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Main;
