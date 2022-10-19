import React, { useEffect } from "react";
import {
  CoinsStyle,
  TableContent,
  TableContentPrice,
  TableContentChangePlus,
  TableContentChangeMinus,
  ActionBtn,
} from "../style/allCoins_styles";
import {
  StarOutlined,
  StarFilled,
  BellOutlined,
  BellFilled,
} from "@ant-design/icons";
import { FavoriteActionHandler } from "../../../Redux/actions/favoriteAction";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { formatPrice } from "@modules/allCoins/utils/formatPrice";
import { useRouter } from "@utils/router";
import { selectedCoinHandler } from "Redux/actions/alertAction";
import useFetch from "../../../../src/hooks/useFetch";
import Spinner from "@components/spin/spin";

export default function AllCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  const { goTo } = useRouter();

  const dispatch = useAppDispatch();

  const { favoriteList } = useAppSelector(
    (state: any) => state.FavoriteReducer
  );
  const { alertList } = useAppSelector((state: any) => state.AlertReducer);

  useEffect(() => {
    doFetch({ url: "/coins?limit=10", method: "get" });
  }, []);

  const favoriteAction = (coin: {
    iconUrl: string;
    name: string;
    price: string;
  }) => {
    dispatch(FavoriteActionHandler(coin));
  };

  const alertHandler = (item: string) => {
    goTo("alert");
    dispatch(selectedCoinHandler(item));
  };

  const checkChangePrice = (change: string) => {
    if (change.includes("-")) {
      return <TableContentChangeMinus>{change}</TableContentChangeMinus>;
    } else {
      return <TableContentChangePlus>+{change}</TableContentChangePlus>;
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.data.coins.map(
          (
            coin: {
              iconUrl: string;
              name: string;
              price: string;
              change: string;
              uuid: string;
            },
            index: number
          ) => {
            return (
              <CoinsStyle key={index}>
                <div>
                  <img src={coin.iconUrl} style={{ width: 40 }} />
                </div>
                <TableContent> {coin.name}</TableContent>
                <TableContentPrice>
                  {formatPrice(Number(coin.price))} $
                </TableContentPrice>
                {checkChangePrice(coin.change)}
                <ActionBtn onClick={() => favoriteAction(coin)}>
                  {favoriteList.some((item: any) => coin.name === item.name) ? (
                    <StarFilled />
                  ) : (
                    <StarOutlined />
                  )}
                </ActionBtn>
                <ActionBtn onClick={() => alertHandler(coin.uuid)}>
                  {alertList.some((item: any) => coin.uuid === item.uuid) ? (
                    <div>
                      <BellFilled />
                    </div>
                  ) : (
                    <BellOutlined />
                  )}
                </ActionBtn>
              </CoinsStyle>
            );
          }
        )
      )}
    </div>
  );
}
