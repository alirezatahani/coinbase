export const numberToPrice = (price: number) => {
  return price.toLocaleString(undefined, {
    minimumFractionDigits: price <= 0.0001 ? 8 : 3,
  });
};
