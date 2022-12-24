import React, { useState } from "react";
import { Button, Modal, Select, Tooltip } from "antd";
import { CalculatorFilled } from "@ant-design/icons";
import { Calculator } from "@components/calculator";
import { currencyOptions, timpePeriodOptions } from "../utils/selectOptions";
import { ActionbarContainer } from "../style/actionBar_styles";
import { ActionBarProps } from "./actionBar_type";

const ActionBar: React.FC<ActionBarProps> = ({
  handleTimePeriod,
  handleCurrency,
  themeHandler,
  userTheme,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <ActionbarContainer>
      <Tooltip title="Change currency">
        <Select
          defaultValue="yhjMzLPhuIDl"
          onChange={(value: string, options: any) =>
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
        <Modal
          visible={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <Calculator />
        </Modal>
      </Tooltip>
    </ActionbarContainer>
  );
};

export default ActionBar;
