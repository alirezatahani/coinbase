export interface CoinInterface {
  iconUrl: string;
  symbol: string;
  name: string;
  rank: string;
  price: string;
  btcPrice?: string;
  change: number;
  uuid?: string;
  "24hVolume"?: string;
  currencySign?: string;
  marketCap?: string;
  sparkline?: [];
  fullyDilutedMarketCap?: string;
  allTimeHigh?: { price: string; timestamp: number };
}
export type CurrencyOptions = {
  uuid: string;
  symbol: string;
  name: string;
  sign: string;
};
