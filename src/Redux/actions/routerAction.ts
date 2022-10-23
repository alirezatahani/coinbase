import { PARAM } from "../types/types";

export const setParamAction = (payload: string) => {
  return {
    type: PARAM,
    payload,
  };
};
