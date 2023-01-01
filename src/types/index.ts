export interface CoinInterface {
  iconUrl: string;
  name: string;
  price: string;
  change: number;
  uuid?: string;
  currencySign:string
}
export type CoinOptionType = {
  label: string;
  value: string;
};