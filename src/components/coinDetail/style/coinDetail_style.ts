import styled from "styled-components";
import { CoinChangeProps } from "../content/coinDetail_types";

export const CoinDesc = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
}));
export const Coin = styled.p(({ theme }) => ({
  position: "relative",
}));
export const CoinChange = styled.span<CoinChangeProps>(({ theme, price }) => ({
  position: "absolute",
  top: "-13px",
  color: Number(price >= 0)
    ? theme.palette.success[400]
    : theme.palette.danger[400],
}));
export const MyDiv = styled.div(({ theme }) => ({
  display: "flex",
  gap: "5px",
  alignItems: "center",
  margin: 0,
}));
export const RankBadge = styled.span(({ theme }) => ({
  border: `1px solid ${theme.palette.success[400]}`,
  borderRadius: "5px",
  color: theme.palette.text.color,
  padding: "1px 5px",
  fontSize: "10px",
}));
