export interface CoinInterface {
  iconUrl: string;
  name: string;
  price: string;
  change: number;
  uuid?: string;
  currencySign?:string
  sparkline?:[]
}
export type CurrencyOptions = {
  uuid: string;
  symbol: string;
  name: string;
  sign: string;
};