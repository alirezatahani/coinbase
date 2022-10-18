import { SelectedCoin, CreateALertAction } from "Redux/types/types";

const initialState = {
  coinUuid: <string>"",
  alertList: <any[]>[],
};

export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SelectedCoin:
      return { ...state, coinUuid: action.payload };
    case CreateALertAction:
      return {
        ...state,
        alertList: [...state.alertList, action.payload],
      };

    default:
      return state;
  }
};
