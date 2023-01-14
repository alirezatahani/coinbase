import { useReducer, useState } from "react";
import apiClient from "../utils/apiClient";

const actions = {
  fetchRequest: "FETCH_DATA_REQUEST",
  fetchSuccess: "FETCH_DATA_SUCCESS",
  fetchFailure: "FETCH_DATA_FAILURE",
};
const initialState = {
  loading: true,
  error: null,
  data: [],
  hasMore: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.fetchRequest:
      return {
        ...state,
        data: action.payload === "searching" ? [] : [...state.data],
        loading: true,
        error: null,
      };
    case actions.fetchSuccess:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        hasMore: action.payload.length > 0,
        error: null,
      };
    case actions.fetchFailure:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(state.data);

  async function performAction(options) {
    try {
      dispatch({ type: actions.fetchRequest, payload: options.getBy });
      const response = await apiClient(options);
      dispatch({
        type: actions.fetchSuccess,
        payload: response.data.data.coins,
      });
    } catch (error) {
      dispatch({ type: actions.fetchFailure, payload: error.message });
    }
  }
  return [state, performAction];
};

export default useFetch;
