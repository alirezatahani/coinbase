import styled from "styled-components";

export const FooterContainer = styled.div(({ theme }) => ({
  width: "100%",
  height: "70px",
  position: "fixed",
  bottom: 0,
  zIndex: 999,
  backgroundColor: theme.palette.primary[800],
  color: theme.palette.common.white,
  padding: "1rem 0",
  display:"flex",
  alignItems:"center",
  gap:"1rem"
}));
export const FavCoinContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "max-content",
  padding: "0rem 1rem",
  gap: ".5rem",
}));
export const FavCoinDesc = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: ".2rem",
}));
export const FavCoinTitle = styled.div(({ theme }) => ({
  position: "relative",
}));
export const FavCoinChange = styled.span(({ theme }) => ({
  position: "absolute",
  top: -10,
  right: -20,
}));
