import { CreateALertAction } from "../../types/types";
import { initialState } from "./type";

// {
//     bitcoin: {
//         alerts: [
//             {
//              }
//         ]
//     }
// }

const initialState: initialState = {};

export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CreateALertAction:
      return {
        ...state,
        [action.payload.name]: {
          alerts: [...state[action.payload.name].alerts, action.payload],
        },
      };

    default:
      return state;
  }
};
