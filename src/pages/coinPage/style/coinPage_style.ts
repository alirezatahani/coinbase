import styled from "styled-components";

export const CoinDetailPage = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.color,
  color:theme.palette.text.color,
  display: "flex",
  justifyContent: "center",
  width: 550,
  minHeight: 170,
  padding: "2rem",
  paddingBottom:"170px",
}));
