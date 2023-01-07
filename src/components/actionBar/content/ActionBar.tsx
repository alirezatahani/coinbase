import React, { useEffect, useState } from "react";
import { Button, Modal, Select, Tooltip } from "antd";
import { CalculatorFilled } from "@ant-design/icons";
import { Calculator } from "@components/calculator";
import useFetch from "../../../hooks/useFetch";
import { ActionBarProps, OptionInterface } from "./actionBar_type";
import { currencyOptions, timpePeriodOptions } from "../utils/selectOptions";
import { ActionbarContainer } from "../style/actionBar_styles";
import GetRefrenceCurrency from "../utils/getRefrenceCurrency";

const ActionBar: React.FC<ActionBarProps> = ({
  handleTimePeriod,
  handleCurrency,
  themeHandler,
  userTheme,
  currency,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstCoinOption, setFirstCoinOption] = useState<OptionInterface>();
  const [defaultOption, setDefaultOption] = useState<OptionInterface>();
  const [{ data, loading }, fetchReferenceCoinData] = useFetch();
  const [{ data: data2, loading: loading2 }, fetchFirstCoinData] = useFetch();

  const createDefualtOption = async () => {
    let options = { value: "", label: "" };
    let coinData = await data?.data?.coin;
    options = {
      value: coinData?.price,
      label: coinData?.symbol + "-" + coinData?.name,
    };
    setDefaultOption(options);
  };
  const createFirstCoinOption = async () => {
    let options = { value: "", label: "" };
    let coinData = await data2?.data?.coin;
    options = {
      value: coinData?.price,
      label: coinData?.symbol + "-" + coinData?.name,
    };
    setFirstCoinOption(options);
  };

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
    createDefualtOption();
  }, [currency]);

  useEffect(() => {
    createDefualtOption();
    createFirstCoinOption();
  }, [data, data2]);

  return (
    <ActionbarContainer>
      <Tooltip title="Change currency">
        <Select
          defaultValue="yhjMzLPhuIDl"
          onChange={(value: string, options: OptionInterface) =>
            handleCurrency(value, options)
          }
          options={currencyOptions}
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
          {!loading && !loading2 && data && data2 && (
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
