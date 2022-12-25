import { Select } from "antd";
import useFetch from "../../../hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Input, InputRowContainer } from "../style/calculator_style";

const Calculator = () => {
    const [options, setOptions]: any = useState([]);
    const [{ data, loading }, fetchCoinData] = useFetch();
  
  useEffect(() => {
    fetchCoinData({ url: `/coins`, method: "get" });
  }, []);
  useEffect(() => {
    createOptions();
  }, [data]);
  const createOptions = () => {
    let options: any = [];
    !loading &&
      data?.data.coins.map((item: any) => {
        return options.push({
          value: item.price,
          label: item.symbol + "-" + item.name,
        });
      });
    return setOptions(options);
  };
  
  return (
    <div>
      <h2>Calculator</h2>
      <p>
        Use the calculator to convert real-time prices between all available
        cryptocurrencies and fiat.
      </p>
      <InputRowContainer>
        <Input type="number" name="firstValue"  />
        <Select options={options}  />
      </InputRowContainer>
    </div>
  );
};

export default Calculator;
