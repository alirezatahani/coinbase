import React from "react";
import { Button, Select, Tooltip } from "antd";
import { currencyOptions, timpePeriodOptions } from "../utils/selectOptions";
import { ActionbarContainer } from "../style/actionBar_styles";
import { ActionBarProps } from "./actionBar_type";

const ActionBar: React.FC<ActionBarProps> = ({
  handleTimePeriod,
  handleCurrency,
  themeHandler,
  userTheme,
}) => {
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
    </ActionbarContainer>
  );
};

export default ActionBar;
