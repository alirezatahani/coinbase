import { useRouter } from "@utils/router";
import { useSelector } from "react-redux";
import { Input, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { AlertStyle, FormStyle } from "../style/alert_styles";
import React from "react";
import useFetch from "../../../hooks/useFetch";

export default function Alert() {
  const { selectedCoin } = useSelector((state: any) => state.AlertReducer);
  const [{ data }] = useFetch();
  const { goBack } = useRouter();

  console.log(data && data, "isWOrking!");
  return (
    <AlertStyle>
      <FormStyle>
        <Input
          placeholder="set target price"
          type="number"
          style={{ width: 200 }}
        />
        <Button type="primary">Set Alert</Button>
      </FormStyle>
      <Button
        type="dashed"
        size="small"
        icon={<ArrowLeftOutlined />}
        onClick={() => goBack()}
      ></Button>
    </AlertStyle>
  );
}
