import { ADD_STACK, DELETE_STACK } from "./stackTypes";

export const addStack = (item: string) => {
  return {
    type: ADD_STACK,
    payload: item,
  };
};
export const deleteStack = () => {
  return {
    type: DELETE_STACK,
  };
};
