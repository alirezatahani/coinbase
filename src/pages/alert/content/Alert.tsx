import { useRouter } from "@utils/router";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Input, Button, Space } from "antd";
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
  deleteAlertAction,
} from "Redux/actions/alertAction";
import { formatPrice } from "@modules/allCoins/utils/formatPrice";
import { BellFilled } from "@ant-design/icons";
import Spinner from "@components/spin/spin";
import useFetch from "../../../hooks/useFetch";

export default function Alert() {
  const [arrowFlag, setArrowFlag] = useState<string>("");
  const [targetPriceValue, setTargetPriceValue] = useState<number>(0);

  const [{ data, loading }, doFetch] = useFetch();

  const { param } = useAppSelector((state: any) => state.RouterReducer);
   

  const dispatch = useAppDispatch();

  const { goBack } = useRouter();

  useEffect(() => {
    doFetch({
      url: `/coin/${param}`,
      method: "get",
    });
  }, []);

  //arrow direction handler

  const arrowِDirectionLogicHandler = (e: any) => {
    setTargetPriceValue(e.target.value);
    const inputValue = e.target.value;
    if (inputValue.length < 1 || e.target.value == null) {
      return setArrowFlag("null");
    }
    return Number(inputValue) >= Number(data.data.coin.price)
      ? setArrowFlag("up")
      : setArrowFlag("down");
  };

  const arrowِDirectionUiHandler = useMemo(() => {
    switch (arrowFlag) {
      case "up":
        return <ArrowUpStyle />;
      case "down":
        return <ArrowDownStyle />;
      case "null":
        return <div></div>;
    }
  }, [arrowFlag]);

  //alert creator

  const createAlertHandler = () => {
    const coinValue = data.data.coin;
    dispatch(
      createALertAction({
        uuid: coinValue.uuid,
        name: coinValue.name,
        price: targetPriceValue,
        target:
          Number(targetPriceValue) >= Number(coinValue.price)
            ? "crossingUp"
            : "crossingDown",
        status: "active",
      })
    );
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
