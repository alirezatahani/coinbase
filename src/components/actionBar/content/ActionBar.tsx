import React, { useCallback, useEffect, useState } from "react";
import { Button, Modal, Select, Tooltip } from "antd";
import { CalculatorFilled } from "@ant-design/icons";
import { Calculator } from "@components/calculator";
import useFetch from "../../../hooks/useFetch";
import { ActionBarProps, OptionInterface } from "./actionBar_type";
import { timpePeriodOptions } from "../utils/selectOptions";
import { ActionbarContainer } from "../style/actionBar_styles";
import GetRefrenceCurrency from "../utils/getRefrenceCurrency";
import { createOption } from "../utils/createOption";
import { debounce } from "lodash";

const ActionBar: React.FC<ActionBarProps> = ({
  handleTimePeriod,
  handleCurrency,
  themeHandler,
  userTheme,
  currency,
}) => {
  const [searchCurrency, setSearchCurrency] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstCoinOption, setFirstCoinOption] = useState<OptionInterface>();
  const [defaultOption, setDefaultOption] = useState<OptionInterface>();
  const [{ data: refrenceCoin, loading }, fetchReferenceCoinData] = useFetch();
  const [{ data: firstCoin, loading: loading2 }, fetchFirstCoinData] =
    useFetch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const defaultOptionHandler: (options: OptionInterface) => void = (
    options: OptionInterface
  ) => {
    return setDefaultOption({ label: options.label, value: options.value });
  };
  const firstCoinOptionHandler: (options: OptionInterface) => void = (
    options: OptionInterface
  ) => {
    return setFirstCoinOption({ label: options.label, value: options.value });
  };
  useEffect(() => {
    fetchFirstCoinData({ url: "/coin/Qwsogvtv82FCd", method: "get" });
  }, []);

  useEffect(() => {
    fetchReferenceCoinData({ url: `/coin/${currency}`, method: "get" });
    setDefaultOption(createOption(refrenceCoin));
  }, [currency]);

  useEffect(() => {
    setDefaultOption(createOption(refrenceCoin));
    setFirstCoinOption(createOption(firstCoin));
  }, [refrenceCoin, firstCoin]);

  const searchingCurrency = (searchValue: string) => {
    setSearchCurrency(searchValue);
  };
  const handler = useCallback(debounce(searchingCurrency, 600), []);
  const handleSearch = (value: string) => {
    handler(value);
  };

  return (
    <ActionbarContainer>
      <Tooltip title="Change currency">
        <Select
          showSearch
          onSearch={handleSearch}
          filterOption={false}
          defaultValue="yhjMzLPhuIDl"
          onChange={(value: string, options: OptionInterface) =>
            handleCurrency(value, options)
          }
          options={GetRefrenceCurrency(searchCurrency)}
        />
      </Tooltip>
      <Tooltip title="Change time period">
        <Select
          defaultValue="24h"
          onChange={handleTimePeriod}
          options={timpePeriodOptions}
        />
      </Tooltip>
      <Tooltip title="Change theme">
        <Button onClick={themeHandler}>
          {userTheme === "light" ? "Dark" : "Light"}
        </Button>
      </Tooltip>
      <Tooltip title="Calculator">
        <Button onClick={showModal}>
          <CalculatorFilled />
        </Button>
        <Modal visible={isModalOpen} onCancel={handleCancel} footer={null}>
          {!loading && !loading2 && refrenceCoin && firstCoin && (
            <Calculator
              defaultOption={defaultOption}
              handleDefualtOption={defaultOptionHandler}
              firstCoinOption={firstCoinOption}
              handleFirstCoinOption={firstCoinOptionHandler}
            />
          )}
        </Modal>
      </Tooltip>
    </ActionbarContainer>
  );
};

export default ActionBar;
