import styled from "styled-components";

export const FooterContainer = styled.div(({ theme }) => ({
  width: "550px",
  position: "fixed",
  bottom: 0,
  zIndex: 999,
  backgroundColor: theme.palette.primary[800],
  color: theme.palette.common.white,
  paddingTop: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    height: "0.4rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.background.paper,
    outline: `.5px solid ${theme.palette.background.dark}`,
    borderRadius: "5px",
  },
}));
export const FavCoinContainer = styled.div(({ theme }) => ({
  display: "flex",
  fontSize: theme.typography.body1.fontSize,
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
  top: -13,
  right: -20,
}));
