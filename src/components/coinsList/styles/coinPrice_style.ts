import styled from "styled-components";
import { CoinPriceProps } from "../types/coinPrice_types";

export const CoinPrice = styled.p<CoinPriceProps>(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  borderRadius: 4,
  textAlign: "start",
  padding: 2,
  width: 90,
  flex: 1,
}));
