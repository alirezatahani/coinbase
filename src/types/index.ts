export interface CoinInterface {
  iconUrl?: string;
  name?: string;
  price?: string;
  change?: number;
  uuid?: string;
  symbol?: string;
  rank?: string;
  btcPrice?: string;
  volume24h?: string;
  marketCap?: string;
  fullyDilutedMarketCap?: string;
  allTimeHigh?: { price: string; timestamp: number };
}
