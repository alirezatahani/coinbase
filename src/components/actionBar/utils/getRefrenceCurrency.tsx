import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { CurrencyOptions } from "types";

const GetRefrenceCurrency = (searchValue?: string) => {
  const [options, setOptions] = useState([]);
  const [{ data, loading }, getCurrencies] = useFetch();

  const createCurrenciesOption = (currencies: {}[]) => {
    const options = currencies.map((currency: CurrencyOptions) => {
      return {
        value: currency.uuid,
        label: currency.symbol + "-" + currency.name,
        sign: currency.sign || currency.symbol,
        symbol: currency.symbol,
      };
    });
    setOptions(options);
  };

  useEffect(() => {
    getCurrencies({
      url: searchValue
        ? `/reference-currencies?search=${searchValue}`
        : "/reference-currencies",
      method: "get",
    });
  }, [searchValue]);
  useEffect(() => {
    !loading && data && createCurrenciesOption(data.data.currencies);
  }, [data]);

  return !loading && data && options;
};

export default GetRefrenceCurrency;
