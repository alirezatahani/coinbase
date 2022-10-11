import React, { useEffect } from "react";
import {
  CoinsStyle,
  TableContent,
  TableContentPrice,
  TableContentChangePlus,
  TableContentChangeMinus,
  StarBtn,
} from "../style/allCoins_styles";
import { StarOutlined, StarFilled, BellOutlined } from "@ant-design/icons";
import { FavoriteActionHandler } from "../../../Redux/actions/favoriteAction";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "@modules/allCoins/utils/formatPrice";
import useFetch from "../../../../src/hooks/useFetch";
import Spinner from "@components/spin/spin";
import { useRouter } from "@utils/router";

export default function AllCoins() {
  const [{ loading, data }, doFetch] = useFetch();

  const { goTo } = useRouter();

  const dispatch = useDispatch();

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

  const { favoriteList } = useSelector((state: any) => state.FavoriteReducer);

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
                <StarBtn onClick={() => favoriteAction(coin)}>
                  {favoriteList.some((item: any) => coin.name === item.name) ? (
                    <StarFilled />
                  ) : (
                    <StarOutlined />
                  )}
                </StarBtn>
                <StarBtn onClick={() => goTo("alert")}>
                  <BellOutlined />
                </StarBtn>
              </CoinsStyle>
            );
          }
        )
      )}
    </div>
  );
}
