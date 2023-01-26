import { ADD_STACK, DELETE_STACK } from "./stackTypes";

const initialState = {
  stack: ["/"],
};

export const stackReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_STACK:
      return { ...state, stack: [...state.stack, action.payload] };
    case DELETE_STACK:
      if (state.stack.length === 1) return state;
      const clonStack = [...state.stack];
      clonStack.pop();
      return { ...state, stack: clonStack };
    default:
      return state;
  }
};
