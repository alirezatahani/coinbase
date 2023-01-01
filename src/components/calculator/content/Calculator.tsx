import React, { ChangeEvent, useEffect, useState } from "react";
import { Select } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import useFetch from "../../../hooks/useFetch";
import { CalculatorProps, OptionsType, ResultType } from "./calculator_type";
import { CalculatorContainer, Input, InputRowContainer } from "../style/calculator_style";
import { CoinOptionType } from "types";

const Calculator: React.FC<CalculatorProps> = ({
  firstCoinOption,
  handleFirstCoinOption,
  defaultOption,
  handleDefualtOption,
}) => {
  const [{ data, loading }, fetchCoinData] = useFetch();
  const [options, setOptions] = useState<OptionsType>();
  const [result, setResult] = useState<ResultType>({
    firstCoinValue: undefined,
    defaultCoinValue: undefined,
  });

  useEffect(() => {
    fetchCoinData({ url: `/coins`, method: "get" });
  }, []);

  useEffect(() => {
    createOptions();
  }, [data]);

  const createOptions = () => {
    let options: OptionsType = [];
    !loading &&
      data?.data.coins.map(
        (item: { price: string; symbol: string; name: string }) => {
          return options.push({
            value: item.price,
            label: item.symbol + "-" + item.name,
          });
        }
      );
    return setOptions(options);
  };
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e?.target?.name;
    let value = e?.target?.value;
    switch (name) {
      case "firstCoinValue": {
        let finalResult = (
          (Number(value) * Number(firstCoinOption.value)) /
          Number(defaultOption.value)
        ).toFixed(6);
        return setResult({ defaultCoinValue: Number(finalResult) });
      }
      default: {
        let finalResult = (
          (Number(value) * Number(defaultOption.value)) /
          Number(firstCoinOption.value)
        ).toFixed(6);
        return setResult({ firstCoinValue: Number(finalResult) });
      }
    }
  };
  const selectHandler: (value: string, name: string) => void = (
    value: string,
    name: string
  ) => {
    switch (name) {
      case "firstCoin": {
        let finalResult = (Number(value) / Number(defaultOption.value)).toFixed(
          6
        );
        return setResult({ defaultCoinValue: Number(finalResult) });
      }
      default: {
        let finalResult = (
          Number(value) / Number(firstCoinOption.value)
        ).toFixed(6);
        return setResult({ firstCoinValue: Number(finalResult) });
      }
    }
  };

  return (
    <CalculatorContainer>
      <h2>Calculator</h2>
      <p>
        Use the calculator to convert real-time prices between all available
        cryptocurrencies and fiat.
      </p>
      <InputRowContainer>
        <Input
          type="number"
          name="firstCoinValue"
          value={result.firstCoinValue}
          onChange={inputHandler}
        />
        <Select
          options={options}
          value={firstCoinOption}
          onChange={(value: CoinOptionType, options: CoinOptionType) => {
            selectHandler(value.value, "firstCoin");
            handleFirstCoinOption(options);
          }}
        />
      </InputRowContainer>
      <SwapOutlined rotate={90}/>
      <InputRowContainer>
        <Input
          type="number"
          name="defaultCoinValue"
          value={result.defaultCoinValue}
          onChange={inputHandler}
        />
        <Select
          options={options}
          value={defaultOption}
          onChange={(value: CoinOptionType, options: CoinOptionType) => {
            selectHandler(value.value, "defaultCoin");
            handleDefualtOption(options);
          }}
        />
      </InputRowContainer>
    </CalculatorContainer>
  );
};

export default Calculator;
