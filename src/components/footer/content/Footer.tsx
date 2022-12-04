import * as React from "react";
import { useSelector } from "react-redux";
import { CoinInterface } from "types";
import { CoinPriceChangeSection } from "@components/coinPriceChange";
import { numberToPrice } from "@utils/numberToPrice";
import {
  FavCoinChange,
  FavCoinContainer,
  FavCoinDesc,
  FavCoinTitle,
  FooterContainer,
} from "../style/footer_style";

const Footer = () => {
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  return (
    <FooterContainer>
      {favoriteList.map((coin: CoinInterface) => (
        <FavCoinContainer>
          <img src={coin.iconUrl} style={{ width: "40px" }} />
          <FavCoinDesc>
            <FavCoinTitle>
              <span>{coin.name}</span>
              <FavCoinChange>
                <CoinPriceChangeSection priceChange={Number(coin.change)} />
              </FavCoinChange>
            </FavCoinTitle>
            <span>{numberToPrice(Number(coin.price))}</span>
          </FavCoinDesc>
        </FavCoinContainer>
      ))}
    </FooterContainer>
  );
};
export default Footer;
