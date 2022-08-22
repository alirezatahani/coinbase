import React, { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  const [filterData, setFilterData] = useState([]);
  const [newFilter, setNewFilter] = useState([]);
  const [data, setData] = useState(null);

  const baseUrl = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    async function getData() {
      const actualData = await fetch(baseUrl).then((response) =>
        response.json()
      );
      setData(actualData);
    }

    getData();
  }, []);

  console.log(data, "data");
  console.log(filterData, "filter");

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
        <h2>Coinbase</h2>
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
      {filterData.length != 0 && (
        <div id="show-result">
          {filterData.map((item, index) => {
            return <p key={index}>name : {item.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
