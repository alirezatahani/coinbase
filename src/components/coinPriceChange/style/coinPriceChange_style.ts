import styled from "styled-components";
import { CoinPriceChangeProps } from "../content/coinPriceChange_types";

export const PriceChangeContainer = styled.p<CoinPriceChangeProps>(
  ({ theme, priceChange }) => ({
    fontSize: theme.typography.body1.fontSize,
    color:
      priceChange >= 0 ? theme.palette.success[600] : theme.palette.danger[600],
    flex: 1,
  })
);
