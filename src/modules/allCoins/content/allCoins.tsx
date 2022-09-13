import React, { useEffect } from "react";
import {
  CoinsStyle,
  CoinsTitleStyle,
  TableContent,
  TableContentPrice,
  TableTitle,
  StarBtn,
} from "../style/allCoins_styles";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { FavoriteActionHandler } from "@redux/actions/favoriteAction";
import { useSelector, useDispatch } from "react-redux";
import useFetch from "../../../../src/hooks/useFetch";
import Spinner from "@components/spin/spin";

export default function AllCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  const dispatch = useDispatch();

  useEffect(() => {
    doFetch({ url: "/coins?limit=10", method: "get" });
  }, []);

  const favoriteAction = (coin: any) => {
    dispatch(FavoriteActionHandler(coin));
  };

  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  console.log(favoriteList, "eeee");

  return (
    <div>
      <CoinsTitleStyle>
        <TableTitle>Icon</TableTitle>
        <TableTitle>Name</TableTitle>
        <TableTitle>Price</TableTitle>
      </CoinsTitleStyle>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.data.coins.map((coin: any, index: number) => {
          return (
            <CoinsStyle key={index}>
              <StarBtn onClick={() => favoriteAction(coin)}>
                {favoriteList.some((item: any) => coin.name === item.name) ? (
                  <StarFilled />
                ) : (
                  <StarOutlined />
                )}
              </StarBtn>
              <div>
                <img src={coin.iconUrl} style={{ width: 40, marginLeft: 40 }} />
              </div>
              <TableContent> {coin.name}</TableContent>
              <TableContentPrice>
                ${Number(coin.price).toFixed(3)}
              </TableContentPrice>
            </CoinsStyle>
          );
        })
      )}
    </div>
  );
}
