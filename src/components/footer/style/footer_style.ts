import styled from "styled-components";

type FavCoinProps = {
  change: number;
};

export const FooterContainer = styled.div(({ theme }) => ({
  width: "550px",
  minHeight: "130px",
  position: "fixed",
  bottom: 0,
  zIndex: 999,
  backgroundColor: "#101820FF",
  color: "#FEE715FF",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    height: "0.4rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.background.color,
    outline: `.5px solid ${theme.palette.background.color}`,
    borderRadius: "5px",
  },
}));
export const FavCoinCard = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  flexDirection: "column",
  padding: "1rem",
  border: "1px solid #333",
  minWidth: "130px",
  minHeight: "130px",
}));
export const FavCoinDesc = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: ".2rem",
}));
export const FavCoinTitle = styled.div(({ theme }) => ({
  position: "relative",
}));
export const FavCoinChange = styled.span<FavCoinProps>(({ theme, change }) => ({
  position: "absolute",
  top: -13,
  right: change >= 0 ? -30 : -10,
  color: change >= 0 ? theme.palette.success[600] : theme.palette.danger[600],
}));
export const EmptyText = styled.p(({ theme }) => ({
  width: "100%",
  textAlign: "center",
}));
