import { PARAM } from "../../types/types";
import { initialState } from "./type";

const initialState: initialState = {
  param: "",
};

export const routerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PARAM:
      return {
        ...state,
        param: action.payload,
      };

    default:
      return state;
  }
};
