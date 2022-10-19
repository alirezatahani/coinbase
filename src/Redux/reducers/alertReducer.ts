import {
  SelectedCoin,
  CreateALertAction,
  CoinData,
  DeleteAlertAction,
} from "Redux/types/types";

const initialState = {
  coinUuid: <string>"",
  alertList: <any[]>[],
  coinData: <any>[],
};

export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SelectedCoin:
      return { ...state, coinUuid: action.payload };
    case CoinData:
      return { ...state, coinData: action.payload };
    case CreateALertAction:
      return {
        ...state,
        alertList: [...state.alertList, action.payload],
      };
    case DeleteAlertAction:
      const newArray = state.alertList.filter(
        (item) => item !== action.payload
      );
      return {
        ...state,
        alertList: newArray,
      };

    default:
      return state;
  }
};
