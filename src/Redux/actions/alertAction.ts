import { SelectedCoin, SetAlert } from "Redux/types/types";

export const selectedCoinHandler = (item: string) => {
  return {
    type: SelectedCoin,
    payload: item,
  };
};

export const setAlertHandler = (uuid: string, name: string, price: number) => {
  return {
    type: SetAlert,
    payload: [{ uuid: uuid, name: name, targetPrice: price }],
  };
};
