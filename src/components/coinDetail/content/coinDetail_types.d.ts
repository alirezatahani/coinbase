export type CoinDetailProps = {
  coinData: {
    name: string;
    symbol: string;
    price: string;
    iconUrl: string;
    rank: string;
    change: number;
    btcPrice: string;
    "24hVolume": string;
    marketCap: string;
    fullyDilutedMarketCap:string;
    allTimeHigh: { price: string; timestamp: number };
  };
  sign:string
};

export type CoinChangeProps = {
  price: number;
};

export type CoinStatisticsRowProps = {
  isLastRow:Boolean
}