import { SelectedCoin } from "Redux/types/types";

const initialState = {
  selectedCoin: <string>"",
  alertList: <any[]>[],
};

export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SelectedCoin:
      return { ...state, selectedCoin: action.payload };
    default:
      return state;
  }
};
