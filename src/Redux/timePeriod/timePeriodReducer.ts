import { CHANGE_TIMEPERIOD } from "./timePeriodType";

const initialState: { timePeriod: string } = {
  timePeriod: "24h",
};

export const timePeriodReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case CHANGE_TIMEPERIOD:
      return { ...state, timePeriod: action.payload };
    default:
      return state;
  }
};
