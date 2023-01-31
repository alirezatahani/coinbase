import { ADD_STACK, DELETE_STACK } from "./stackTypes";

const initialState = {
  stack: ["/"],
  query: "",
};
const useParams = (query: string) => {
  const queryParams = query.split(":");
  return queryParams[queryParams.length - 1];
};

export const stackReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_STACK:
      const query = useParams(action.payload);
      return {
        ...state,
        stack: [...state.stack, action.payload],
        query: query,
      };
    case DELETE_STACK:
      if (state.stack.length === 1) return state;
      const clonStack = [...state.stack];
      clonStack.pop();
      return { ...state, stack: clonStack };
    default:
      return state;
  }
};
