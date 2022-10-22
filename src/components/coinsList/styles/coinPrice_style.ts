import styled from "styled-components";

export const CoinPrice = styled.p<CoinPriceProps>(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  borderRadius: 4,
  textAlign: "start",
  padding: 2,
  width: 90,
  flex: 1,
}));

export interface CoinPriceProps {
  children?: JSX.Element | JSX.Element[] | any;
}
