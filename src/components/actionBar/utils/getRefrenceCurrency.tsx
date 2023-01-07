import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { CurrencyOptions } from "types";

const GetRefrenceCurrency = () => {
  const [options, setOptions] = useState([]);
  const [{ data, loading }, getCurrencies] = useFetch();

  useEffect(() => {
    getCurrencies({ url: "/reference-currencies", method: "get" });
  }, []);
  useEffect(() => {
    !loading && data && createCurrenciesOption(data.data.currencies);
  }, [data]);

  const createCurrenciesOption = (currencies: {}[]) => {
    console.log(currencies, "test");

    const options = currencies.map((currency: CurrencyOptions) => {
      return {
        value: currency.uuid,
        label: currency.symbol + "-" + currency.name,
        sign: currency.sign,
        symbol: currency.symbol,
      };
    });
    console.log(options, "opt2222");
    setOptions(options);
  };

  return !loading && data && options;
};

export default GetRefrenceCurrency;
