import { CoinOptionType } from "types";

export type OptionsType = { value: string; label: string }[];
export type ResultType = { firstCoinValue?: number; defaultCoinValue?: number };

export type CalculatorProps = {
  defaultOption: CoinOptionType;
  handleDefualtOption: (options: CoinOptionType) => void;
  firstCoinOption: CoinOptionType;
  handleFirstCoinOption: (options: CoinOptionType) => void;
};
