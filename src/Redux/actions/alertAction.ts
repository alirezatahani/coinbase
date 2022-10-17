import { SelectedCoin } from "Redux/types/types";

export const selectedCoinHandler = (item: string) => {
  return {
    type: SelectedCoin,
    payload: item,
  };
};
