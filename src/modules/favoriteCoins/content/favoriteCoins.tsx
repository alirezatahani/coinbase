import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  CoinsStyle,
  TableContent,
  TableContentPrice,
  StarBtn,
  TableContentChangeMinus,
  TableContentChangePlus,
} from "../style/favoriteCoins_styles";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { FavoriteActionHandler } from "../../../Redux/actions/favoriteAction";

export default function FavoriteCoins() {
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  const dispatch = useDispatch();

  const favoriteAction = (coin: any) => {
    dispatch(FavoriteActionHandler(coin));
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
      {favoriteList.length !== 0 ? (
        <div>
          {favoriteList &&
            favoriteList.map((coin: any, index: number) => {
              return (
                <CoinsStyle key={index}>
                  <div>
                    <img src={coin.iconUrl} style={{ width: 40 }} />
                  </div>
                  <TableContent> {coin.name}</TableContent>
                  <TableContentPrice>
                    ${Number(coin.price).toFixed(3)}
                  </TableContentPrice>
                  {checkChangePrice(coin.change)}
                  <StarBtn onClick={() => favoriteAction(coin)}>
                    {favoriteList.some(
                      (item: any) => coin.name === item.name
                    ) ? (
                      <StarFilled />
                    ) : (
                      <StarOutlined />
                    )}
                  </StarBtn>
                </CoinsStyle>
              );
            })}
        </div>
      ) : (
        <p style={{ color: "white" }}>Empty</p>
      )}
    </div>
  );
}
