import axios from "axios";
import { coinsApiCall, ErrorAction } from "../Redux/Actions/coinAction";
import { apiKey } from "./key/key";

// const baseUrl = "https://api.coinranking.com/v2/coins";

export const getData = (query) => async (dispatch) => {
  console.log(query, "query");
  try {
    const { data } = await axios.get(
      `https://api.coinranking.com/v2/search-suggestions?query=${
        query ? query : "redux"
      }`,
      {
        headers: {
          "x-access-token": apiKey,
        },
      }
    );
    console.log(data, "data");

    dispatch(coinsApiCall(data));
  } catch (error) {
    const errorMsg = error;
    dispatch(ErrorAction(errorMsg));
  }
};
