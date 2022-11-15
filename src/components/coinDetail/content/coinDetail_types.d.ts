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
  };
};

export type CoinChangeProps = {
  price: number;
};
