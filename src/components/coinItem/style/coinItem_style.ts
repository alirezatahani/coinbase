import styled from "styled-components";

export const CoinDesc = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  height: "100%",
  gap: ".5rem",
  flex: 1.5,
}));
export const CoinName = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
}));
export const CoinContent = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  marginBottom: "1rem",
  color: theme.palette.text.color,
}));
