import { OptionInterface } from "../content/actionBar_type";

export const createOption: (data: any) => OptionInterface = (data) => {
  let options = { value: "", label: "" };
  let coinData = data?.data?.coin;
  options = {
    value: coinData?.price,
    label: coinData?.symbol + "-" + coinData?.name,
  };
  return options;
};
