export type CoinDetailProps = {
  coinData: {
    name: string;
    symbol: string;
    price: string;
    iconUrl: string;
    rank: string;
    change:number;
    btcPrice:string;
    "24hVolume":string
  };
};

export type CoinChangeProps = {
  price: number;
};
