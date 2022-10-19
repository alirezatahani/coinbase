import {
  CreateALertAction,
  DeleteAlertAction,
  SelectedCoin,
  CoinData,
} from "Redux/types/types";

export const selectedCoinHandler = (item: string) => {
  return {
    type: SelectedCoin,
    payload: item,
  };
};

export const createALertAction = (
  uuid: string,
  name: string,
  price: number,
  target: string
) => {
  return {
    type: CreateALertAction,
    payload: { uuid: uuid, name: name, price: price, target: target },
  };
};

export const setCoinDataToReduxAction = (item: any) => {
  return {
    type: CoinData,
    payload: item,
  };
};
export const deleteAlertAction = (item: any) => {
  return {
    type: DeleteAlertAction,
    payload: item,
  };
};
