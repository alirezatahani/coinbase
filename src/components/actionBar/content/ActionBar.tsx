import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Select, Tooltip } from "antd";
import { changeToDark, changeToLight } from "@redux/userTheme/userThemeAction";
import { changeReferenceCurrency } from "@redux/referenceCurrency/referenceCurrencyAction";
import { CalculatorFilled } from "@ant-design/icons";
import { Calculator } from "@components/calculator";
import useFetch from "../../../hooks/useFetch";
import { ActionBarProps, OptionInterface } from "./actionBar_type";
import { timpePeriodOptions } from "../utils/selectOptions";
import { ActionbarContainer } from "../style/actionBar_styles";
import GetRefrenceCurrency from "../utils/getRefrenceCurrency";
import { createOption } from "../utils/createOption";

const ActionBar: React.FC<ActionBarProps> = ({
  handleTimePeriod,
  currency,
}) => {
  const userTheme = useSelector((state: any) => state.theme.theme);
  const referenceCurrency = useSelector((state: any) => state.referenceCurrency.value);
  const [searchCurrency, setSearchCurrency] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstCoinOption, setFirstCoinOption] = useState<OptionInterface>();
  const [defaultOption, setDefaultOption] = useState<OptionInterface>();
  const [{ data: refrenceCoin, loading }, fetchReferenceCoinData] = useFetch();
  const [{ data: firstCoin, loading: loading2 }, fetchFirstCoinData] =
    useFetch();
  const dispatch = useDispatch();

  const themeToggler = () => {
    userTheme === "light"
      ? dispatch(changeToDark())
      : dispatch(changeToLight());
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
          defaultValue={referenceCurrency}
          onChange={(value: string, options: OptionInterface) =>
           dispatch(changeReferenceCurrency(options))            
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
        <Button onClick={()=>themeToggler()}>
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
