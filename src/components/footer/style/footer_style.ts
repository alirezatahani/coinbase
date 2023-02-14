import styled from "styled-components";

type FavCoinProps = {
  change: number;
};
type InnerCardProps = {
  flipped: boolean;
};
export const FooterContainer = styled.div(({ theme }) => ({
  width: "550px",
  minHeight: "130px",
  position: "fixed",
  bottom: 0,
  zIndex: 999,
  backgroundColor: "#26495c",
  color: "#e5e5dc",
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
export const FlipCoinCard = styled.div(({}) => ({
  backgroundColor: "transparent",
  minWidth: "130px",
  minHeight: "130px",
  perspective: "1000px",
}));
export const InnerCard = styled.div<InnerCardProps>(({ flipped }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: " all 1s ease-in-out",
  cursor: "pointer",
  transform: flipped ? "rotateY(180deg)" : null,
  borderRadius: "8px",
  border: "1px solid #e5e5dc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem",
}));
export const FrontCard = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontSize: theme.typography.body1.fontSize,
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "0rem 1rem",
  gap: ".5rem",
  position: "absolute",
  backfaceVisibility: "hidden",
  boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.15)",
  justifyContent: "center",
}));
export const BackCard = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "12px",
  alignItems: "start",
  paddingLeft: "1rem",
  width: "100%",
  height: "100%",
  position: "absolute",
  gap: ".5rem",
  backfaceVisibility: "hidden",
  boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.15)",
  justifyContent: "center",
  transform: "rotateY(180deg)",
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
  right: change >= 0 ? -12 : -26,
  color: change >= 0 ? theme.palette.success[600] : theme.palette.danger[600],
}));
export const BackCardDesc = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: ".2rem",
}));
export const CoinName = styled.p(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
  fontWeight: theme.typography.subtitle2.fontWeight,
  color: "#f3ca20",
  marginBottom: 0,
}));
export const BackCardTitle = styled.p(({ theme }) => ({
  color: "#c4a35a",
  borderBottom: `.5px solid #c4a35a`,
  marginBottom: 0,
}));
export const BackCardValue = styled.p(({ theme }) => ({
  marginBottom: 0,
}));
export const EmptyText = styled.p(({ theme }) => ({
  width: "100%",
  textAlign: "center",
}));
