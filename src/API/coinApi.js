import axios from "axios";
import { coinsApiCall } from "../Redux/Actions/coinAction";

const baseUrl = "https://api.coinranking.com/v2/coins";
const apiKey = "coinranking369971eebd30ea4d94a91d301bd9fb9099e6792808fd718c";

// export async function getData() {
//   fetch(baseUrl, {
//     method: "GET",
//     headers: {
//       "x-access-token": apiKey,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch(coinsApiCall(data));
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

export const getData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(baseUrl, {
      headers: {
        "x-access-token": apiKey,
      },
    });

    dispatch(coinsApiCall(data));
  } catch (error) {
    console.log(error);
  }
};
