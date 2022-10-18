import { useRouter } from "@utils/router";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, notification, Space, Table, Tag } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  AlertStyle,
  FormStyle,
  ArrowDownStyle,
  ArrowUpStyle,
  CoinsStyle,
  TableContent,
} from "../style/alert_styles";
import React, { useEffect, useState } from "react";
import { createALertAction } from "Redux/actions/alertAction";
import { formatPrice } from "@modules/allCoins/utils/formatPrice";
import useFetch from "../../../hooks/useFetch";

export default function Alert() {
  type NotificationType = "info";

  const crossingUpNotification = (type: NotificationType, name: string) => {
    notification[type]({
      message: "news",
      description: `${name} is crossing up`,
    });
  };
  const crossingDownNotification = (type: NotificationType, name: string) => {
    notification[type]({
      message: "news",
      description: `${name} is crossing Down`,
    });
  };

  const { coinUuid, alertList } = useSelector(
    (state: any) => state.AlertReducer
  );
  console.log(alertList, "app");

  const dispatch = useDispatch();

  const { goBack } = useRouter();

  const [{ data }, doFetch] = useFetch();

  const [arrowFlag, setArrowFlag] = useState<string>("");
  const [targetPriceValue, setTargetPriceValue] = useState<number>(0);

  useEffect(() => {
    doFetch({
      url: `/coin/${coinUuid}`,
      method: "get",
    });
  }, []);

  const inputPriceChangeHandler = (e: any) => {
    setTargetPriceValue(e.target.value);
    if (e.target.value >= formatPrice(Number(data.data.coin.price))) {
      return setArrowFlag("up");
    } else if (e.target.value <= formatPrice(Number(data.data.coin.price))) {
      return setArrowFlag("down");
    }
  };

  const createAlertHandler = () => {
    if (targetPriceValue >= data.data.coin.price) {
      dispatch(
        createALertAction(data.data.coin.name, targetPriceValue, "crossingUp")
      );
    } else if (targetPriceValue <= data.data.coin.price) {
      dispatch(
        createALertAction(data.data.coin.name, targetPriceValue, "crossingDown")
      );
    }
  };

  return (
    <AlertStyle>
      <Space />
      <FormStyle>
        {arrowFlag == "up" ? <ArrowUpStyle /> : <ArrowDownStyle />}
        <Input
          placeholder="set target price"
          type="number"
          style={{ width: 200 }}
          onChange={inputPriceChangeHandler}
        />
        <Button
          type="dashed"
          style={{ marginLeft: "1%" }}
          onClick={() => createAlertHandler()}
        >
          Set Alert
        </Button>
      </FormStyle>

      {/* <>
        {alertList.map((item: any) => {
          return item.map((value: any) => {
            if (value.uuid === coinUuid) {
              return (
                <CoinsStyle>
                  <TableContent>{value.name}</TableContent>
                  <TableContent>{value.targetPrice} $</TableContent>
                  <TableContent>{value.status} $</TableContent>
                </CoinsStyle>
              );
            }
          });
        })}
      </> */}
      <div>
        <Button
          type="dashed"
          size="small"
          icon={<ArrowLeftOutlined />}
          onClick={() => goBack()}
        ></Button>
      </div>
    </AlertStyle>
  );
}
