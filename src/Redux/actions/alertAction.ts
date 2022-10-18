import { CreateALertAction, SelectedCoin } from "Redux/types/types";

export const selectedCoinHandler = (item: string) => {
  return {
    type: SelectedCoin,
    payload: item,
  };
};

export const createALertAction = (
  name: string,
  price: number,
  targetPrice: string
) => {
  return {
    type: CreateALertAction,
    payload: { name: name, price: price, targetPrice: targetPrice },
  };
};
