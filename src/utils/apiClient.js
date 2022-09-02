import axios from "axios";

const makingUrl = (url) => {
  return process.env.REACT_APP_BASE_URL + url;
};

const apiClient = (options) => {
  const url = makingUrl(options.url);

  return axios({
    url,
    method: options.method,
    headers: {
      "x-access-token": process.env.REACT_APP_API_KEY,
    },
  });
};

export default apiClient;
