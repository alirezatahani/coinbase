import { useRouter } from "@utils/router";
import { useSelector } from "react-redux";
import { Input, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { AlertStyle, FormStyle } from "../style/alert_styles";
import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";

export default function Alert() {
  const { coinUuid } = useSelector((state: any) => state.AlertReducer);

  const [{ loading, data }, doFetch] = useFetch();

  useEffect(() => {
    doFetch({
      url: `/coin/${coinUuid}`,
      method: "get",
    });
  }, []);

  const { goBack } = useRouter();

  console.log(data, "isWOrking!");

  const inputPriceHandler = (e: any) => {};

  return (
    <AlertStyle>
      <FormStyle>
        <Input
          placeholder="set target price"
          type="number"
          style={{ width: 200 }}
          onChange={inputPriceHandler}
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
