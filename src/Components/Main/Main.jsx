import React, { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  const [filterData, setFilterData] = useState([]);
  const [newFilter, setNewFilter] = useState([]);
  const [data, setData] = useState(null);

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

  function handleFilter(e) {
    setNewFilter(
      data.filter((value) => {
        return (
          value.name?.toLowerCase().includes(e.target.value.toLowerCase()) ||
          value.title?.toLowerCase().includes(e.target.value.toLowerCase()) ||
          value.id?.toString().includes(e.target.value) ||
          value.body?.toLowerCase().includes(e.target.value.toLowerCase()) ||
          value.email?.toLowerCase().includes(e.target.value.toLowerCase())
        );
      })
    );

    if (e.target.value == "") {
      return setFilterData([]);
    } else {
      return setFilterData(newFilter);
    }
  }

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
      {/* {filterData.length != 0 && (
        <div id="show-result">
          {filterData.map((item, index) => {
            return <p key={index}>name : {item.name}</p>;
          })}
        </div>
      )} */}
      <table>
        <tr>
          <th>Rank</th>
          <th>Icon</th>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        {data &&
          data.data.coins.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.rank}</td>
                <td>
                  <img src={item.iconUrl} style={{ width: 40 }} />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.change}%</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Main;
