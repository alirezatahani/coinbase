import axios from "axios";
import { coinsApiCall, ErrorAction } from "../Redux/Actions/coinAction";
import { apiKey } from "./key/key";

const baseUrl = "https://api.coinranking.com/v2/coins";

export const getData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(baseUrl, {
      headers: {
        "x-access-token": apiKey,
      },
    });

    dispatch(coinsApiCall(data));
  } catch (error) {
    const errorMsg = error;
    dispatch(ErrorAction(errorMsg));
  }
};
