import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  TableTitle,
  CoinsTitleStyle,
  CoinsStyle,
  TableContent,
  TableContentPrice,
  StarBtn,
} from "../style/favortiePage_styles";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { FavoriteActionHandler } from "@redux/actions/favoriteAction";

export default function FavoritePage() {
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  const dispatch = useDispatch();

  const favoriteAction = (coin: any) => {
    dispatch(FavoriteActionHandler(coin));
  };

  return (
    <div>
      {favoriteList.length !== 0 ? (
        <div>
          <CoinsTitleStyle>
            <TableTitle>Icon</TableTitle>
            <TableTitle>Name</TableTitle>
            <TableTitle>Price</TableTitle>
          </CoinsTitleStyle>
          {favoriteList &&
            favoriteList.map((coin: any, index: number) => {
              return (
                <CoinsStyle key={index}>
                  <StarBtn onClick={() => favoriteAction(coin)}>
                    {favoriteList.some(
                      (item: any) => coin.name === item.name
                    ) ? (
                      <StarFilled />
                    ) : (
                      <StarOutlined />
                    )}
                  </StarBtn>
                  <div>
                    <img
                      src={coin.iconUrl}
                      style={{ width: 40, marginLeft: 40 }}
                    />
                  </div>
                  <TableContent> {coin.name}</TableContent>
                  <TableContentPrice>
                    ${Number(coin.price).toFixed(3)}
                  </TableContentPrice>
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
