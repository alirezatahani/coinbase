import { CHANGE_TIMEPERIOD } from "./timePeriodType";

export const changeTimePeriod = (timePeriod: string) => {
  return {
    type: CHANGE_TIMEPERIOD,
    payload: timePeriod,
  };
};
