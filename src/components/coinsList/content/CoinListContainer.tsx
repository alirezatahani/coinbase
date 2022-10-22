import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@components/spin/spin";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { FavoriteActionHandler } from "@redux/actions/favoriteAction";
import {
  CoinContent,
  CoinDesc,
  CoinName,
  FavBtn,
} from "../styles/coinListContainer_style";
import { CoinPriceSection } from "./CoinPrice";
import { CoinPriceChangeSection } from "./CoinChangePrice";

export const CoinList = (props: any) => {
  const { loading, data } = props;
  const dispatch = useDispatch();

  const favoriteAction = (coin: {
    iconUrl: string;
    name: string;
    price: string;
  }) => {
    dispatch(FavoriteActionHandler(coin));
  };
  const { favoriteList } = useSelector((state: any) => state.FavoriteReducer);

  return (
    <div style={{ marginTop: "1rem" }}>
      {loading ? (
        <Spinner />
      ) : data && data.data.coins.length === 0 ? (
        <p>not found...</p>
      ) : (
        data &&
        data.data.coins.map(
          (coin: {
            iconUrl: string;
            name: string;
            price: string;
            change: string;
            uuid: string;
          }) => {
            return (
              <CoinContent key={coin.uuid}>
                <CoinDesc>
                  <img src={coin.iconUrl} style={{ width: 40 }} />
                  <CoinName> {coin.name}</CoinName>
                </CoinDesc>
                <CoinPriceSection props={coin.price} />
                {coin.change ? (
                  <CoinPriceChangeSection props={coin.change} />
                ) : null}
                <FavBtn onClick={() => favoriteAction(coin)}>
                  {favoriteList.some((item: any) => coin.name === item.name) ? (
                    <StarFilled />
                  ) : (
                    <StarOutlined />
                  )}
                </FavBtn>
              </CoinContent>
            );
          }
        )
      )}
    </div>
  );
};
