import { Select } from "antd";
import useFetch from "../../../hooks/useFetch";
import React, { useEffect, useState } from "react";
import {
  Input,
  InputRowContainer,
} from "../style/calculator_style";

const Calculator = () => {
  const [options, setOptions]: any = useState([]);
  
  return (
    <div>
      <h2>Calculator</h2>
      <p>
        Use the calculator to convert real-time prices between all available
        cryptocurrencies and fiat.
      </p>
      <InputRowContainer>
        <Input type="number" />
        <Select options={options} />
      </InputRowContainer>
    </div>
  );
};

export default Calculator;
