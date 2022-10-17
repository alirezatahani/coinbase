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
import { setAlertHandler } from "Redux/actions/alertAction";
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

  const dispatch = useDispatch();

  const { goBack } = useRouter();

  const [{ data }, doFetch] = useFetch();

  const [arrowFlag, setArrowFlag] = useState<string>("");
  const [targetPrice, setTargetPrice] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      doFetch({
        url: `/coin/${coinUuid}`,
        method: "get",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    alertList.map((array: any) => {
      return array.map((coin: any) => {
        if (
          data &&
          formatPrice(Number(data.data.coin.price)) <= coin.targetPrice
        ) {
          return crossingDownNotification("info", coin.name);
        } else if (
          data &&
          formatPrice(Number(data.data.coin.price)) >= coin.targetPrice
        ) {
          return crossingUpNotification("info", coin.name);
        }
      });
    });
  }, []);

  const inputPriceChangeHandler = (e: any) => {
    setTargetPrice(e.target.value);
    if (e.target.value >= data.data.coin.price) {
      return setArrowFlag("up");
    } else if (e.target.value <= data.data.coin.price) {
      return setArrowFlag("down");
    }
  };

  const handleUi = React.useCallback(() => {
    if (arrowFlag == "up") {
      return <ArrowUpStyle />;
    } else if (arrowFlag == "down") {
      return <ArrowDownStyle />;
    } else {
      return <div></div>;
    }
  }, [arrowFlag]);

  const alertActionPrice = () => {
    dispatch(
      setAlertHandler(data.data.coin.uuid, data.data.coin.name, targetPrice)
    );
  };

  return (
    <AlertStyle>
      <Space />
      <FormStyle>
        {handleUi()}
        <Input
          placeholder="set target price"
          type="number"
          style={{ width: 200 }}
          onChange={inputPriceChangeHandler}
        />
        <Button
          type="dashed"
          style={{ marginLeft: "1%" }}
          onClick={() => alertActionPrice()}
        >
          Set Alert
        </Button>
      </FormStyle>

      <>
        {alertList.map((item: any) => {
          return item.map((value: any) => {
            if (value.uuid === coinUuid) {
              return (
                <CoinsStyle>
                  <TableContent>{value.name}</TableContent>
                  <TableContent>{value.targetPrice} $</TableContent>
                </CoinsStyle>
              );
            }
          });
        })}
      </>
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
