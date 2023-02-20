import React, { useState } from "react";
import { FavoriteCoinsContainerProps } from "./Footer_types";
import { CoinInterface } from "types";
import { useAppSelector } from "hooks/hooks";
import { numberToPrice } from "@utils/numberToPrice";
import {
  Container,
  FavCoinChange,
  FavCoinDesc,
  FavCoinTitle,
  FrontCard,
  BackCard,
  FlipCoinCard,
  InnerCard,
  BackCardDesc,
  BackCardValue,
  BackCardTitle,
  CoinName,
} from "../style/favoriteCoinsContainer_style";

const FavoriteCoinsContainer: React.FC<FavoriteCoinsContainerProps> = ({
  favCoinsList,
}) => {
    const [flipped, setFlipped] = useState<any>({});
    const { sign } = useAppSelector((state) => state.referenceCurrency);

  const flipCard = (id: number) => {
    setFlipped((prevState: any) => ({ ...flipped, [id]: !prevState[id] }));
  };

  return (
    <Container>
      {favCoinsList.map((coin: CoinInterface, i: number) => (
        <FlipCoinCard key={coin.uuid}>
          <InnerCard onClick={() => flipCard(i)} flipped={flipped[i]}>
            <FrontCard>
              <img src={coin.iconUrl} style={{ width: "40px" }} />
              <FavCoinDesc>
                <FavCoinTitle>
                  <CoinName>
                    {coin.symbol}
                    <FavCoinChange change={Number(coin.change)}>
                      {Number(coin.change) > 0
                        ? `+${coin.change}`
                        : `${coin.change}`}
                    </FavCoinChange>
                  </CoinName>
                </FavCoinTitle>
                <span>{numberToPrice(Number(coin.price), sign)}</span>
              </FavCoinDesc>
            </FrontCard>
            <BackCard>
              <CoinName>
                <span>{coin.name}</span>
                <span>#{coin.rank}</span>
              </CoinName>
              <BackCardDesc>
                <BackCardTitle>24h volume({sign}):</BackCardTitle>
                <BackCardValue>
                  {numberToPrice(Number(coin["24hVolume"]))}
                </BackCardValue>
              </BackCardDesc>
              <BackCardDesc>
                <BackCardTitle>Market cap({sign}):</BackCardTitle>
                <BackCardValue>
                  {numberToPrice(Number(coin.marketCap))}
                </BackCardValue>
              </BackCardDesc>
            </BackCard>
          </InnerCard>
        </FlipCoinCard>
      ))}
    </Container>
  );
};

export default FavoriteCoinsContainer;
