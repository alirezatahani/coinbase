import styled from "styled-components";
import { CoinPriceChangeProps } from "../content/coinPriceChange_types";

export const PriceChangeContainer = styled.p<CoinPriceChangeProps>(
  ({ theme, priceChange }) => ({
    fontSize: theme.typography.body1.fontSize,
    color:
      priceChange >= 0 ? theme.palette.success[600] : theme.palette.danger[600],
    borderBottom:
      priceChange >= 0
        ? `1px solid ${theme.palette.success[400]}`
        : `1px solid ${theme.palette.danger[400]}`,
    borderRadius: 4,
    flex: 1,
  })
);
