import { useRouter } from "@utils/router";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Input, Button, notification, Space, Table, Tag } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  AlertStyle,
  FormStyle,
  ArrowDownStyle,
  ArrowUpStyle,
  CoinsStyle,
  TableContent,
  CoinDetailStyle,
  Item,
  SpinnerWrapper,
  Wrapper,
  CoinDetailWrapper,
} from "../style/alert_styles";
import React, { useEffect, useState, useMemo } from "react";
import {
  createALertAction,
  setCoinDataToReduxAction,
  deleteAlertAction,
} from "Redux/actions/alertAction";
import { formatPrice } from "@modules/allCoins/utils/formatPrice";
import { BellFilled } from "@ant-design/icons";
import Spinner from "@components/spin/spin";
import useFetch from "../../../hooks/useFetch";

export default function Alert() {
  //
  const [arrowFlag, setArrowFlag] = useState<string>("");
  const [targetPriceValue, setTargetPriceValue] = useState<number>(0);

  const [{ data, loading }, doFetch] = useFetch();

  const { coinUuid, alertList, coinData } = useAppSelector(
    (state: any) => state.AlertReducer
  );

  const dispatch = useAppDispatch();

  const { goBack } = useRouter();

  useEffect(() => {
    doFetch({
      url: `/coin/${coinUuid}`,
      method: "get",
    });
  }, []);

  useEffect(() => {
    dispatch(setCoinDataToReduxAction(data));
  }, [data]);

  //notification
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

  //arrow direction handler

  const arrowِDirectionLogicHandler = (e: any) => {
    setTargetPriceValue(e.target.value);
    if (e.target.value.length < 1 || e.target.value == null) {
      return setArrowFlag("null");
    }
    if (e.target.value >= formatPrice(Number(data.data.coin.price))) {
      return setArrowFlag("up");
    } else if (e.target.value <= formatPrice(Number(data.data.coin.price))) {
      return setArrowFlag("down");
    }
  };

  const arrowِDirectionUiHandler = useMemo(() => {
    if (arrowFlag == "up") {
      return <ArrowUpStyle />;
    } else if (arrowFlag == "down") {
      return <ArrowDownStyle />;
    } else if (arrowFlag == "null") {
      return <div></div>;
    }
  }, [arrowFlag]);

  //alert creator

  const createAlertHandler = () => {
    if (targetPriceValue >= data.data.coin.price && targetPriceValue) {
      dispatch(
        createALertAction(
          data.data.coin.uuid,
          data.data.coin.name,
          targetPriceValue,
          "crossingUp"
        )
      );
    }
    if (targetPriceValue <= data.data.coin.price && targetPriceValue) {
      dispatch(
        createALertAction(
          data.data.coin.uuid,
          data.data.coin.name,
          targetPriceValue,
          "crossingDown"
        )
      );
    }
  };

  const deleteAlertHandler = (item: any) => {
    dispatch(deleteAlertAction(item));
  };

  return (
    <AlertStyle>
      <Space />
      {loading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <CoinDetailWrapper>
          <CoinDetailStyle>
            <Item>
              <img src={data && data.data.coin.iconUrl} style={{ width: 40 }} />
            </Item>
            <Item>
              Price : {data && formatPrice(Number(data.data.coin.price))}
            </Item>
          </CoinDetailStyle>
        </CoinDetailWrapper>
      )}

      <FormStyle>
        <Input
          placeholder="set target price"
          type="number"
          style={{ width: 200 }}
          prefix={arrowِDirectionUiHandler}
          onChange={arrowِDirectionLogicHandler}
        />
        <Button
          type="dashed"
          style={{ marginLeft: "1%" }}
          onClick={() => createAlertHandler()}
        >
          Set Alert
        </Button>
      </FormStyle>

      <Wrapper>
        {alertList.length !== 0 ? (
          alertList.map((value: any) => {
            if (value.uuid === coinUuid) {
              return (
                <CoinsStyle>
                  <TableContent>{value.price} $</TableContent>
                  <TableContent>target : {value.target} </TableContent>
                  <TableContent>
                    <BellFilled onClick={() => deleteAlertHandler(value)} />
                  </TableContent>
                </CoinsStyle>
              );
            }
          })
        ) : (
          <p style={{ color: "white" }}>No alert set</p>
        )}
      </Wrapper>
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
