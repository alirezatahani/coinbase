import { SelectedCoin } from "Redux/types/types";

const initialState = {
  coinUuid: <string>"",
  alertList: <any[]>[],
};

export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SelectedCoin:
      return { ...state, coinUuid: action.payload };

    default:
      return state;
  }
};
