export const numberToPrice = (price: number, sign?: string) => {
  let coinPrice = price.toLocaleString(undefined, {
    minimumFractionDigits:
      price <= 0.0001 ? 8 : 0.0001 < price && price < 1 ? 3 : 0,
  });
  return coinPrice + ` ${sign}`;
};
