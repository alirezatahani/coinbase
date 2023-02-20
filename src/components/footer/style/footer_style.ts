import styled from "styled-components";

type FavCoinProps = {
  change: number;
};
type InnerCardProps = {
  flipped: boolean;
};

export const FooterSection = styled.div(({ theme }) => ({
  width: "550px",
  minHeight: "130px",
  position: "fixed",
  bottom: 0,
  zIndex: 999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.favCoinCard.background.color,
  color: theme.palette.favCoinCard.text.color,
  borderRadius: "38px 38px 0 0",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    height: "0.4rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.background.color,
    outline: `.5px solid ${theme.palette.background.color}`,
    borderRadius: "5px",
  },
  "& .ant-spin-nested-loading": {
    width: "100%",
  },
}));
export const Container = styled.div(() => ({
  width: "100%",
  display: "flex",
  padding: "1rem 2rem",
  alignItems: "center",
  justifyContent: "start",
  gap: "1.5rem",
}));
export const FlipCoinCard = styled.div(({}) => ({
  backgroundColor: "transparent",
  minWidth: "150px",
  minHeight: "130px",
  perspective: "1000px",
}));
export const InnerCard = styled.div<InnerCardProps>(({ flipped, theme }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: " all 1s ease-in-out",
  cursor: "pointer",
  transform: flipped ? "rotateY(180deg)" : null,
  borderRadius: "8px",
  border: `1px solid ${theme.palette.favCoinCard.border.color}`,
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
  borderRadius: "8px",
  justifyContent: "center",
}));
export const BackCard = styled.div(({}) => ({
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
  borderRadius: "8px",
  justifyContent: "center",
  transform: "rotateY(180deg)",
}));
export const FavCoinDesc = styled.div(({}) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: ".2rem",
}));
export const FavCoinTitle = styled.div(({}) => ({
  position: "relative",
}));
export const FavCoinChange = styled.span<FavCoinProps>(({ theme, change }) => ({
  position: "absolute",
  top: -13,
  right: change >= 0 ? -12 : -26,
  color: change >= 0 ? theme.palette.success[600] : theme.palette.danger[600],
}));
export const BackCardDesc = styled.div(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: ".2rem",
  width: "100%",
}));
export const CoinName = styled.p(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
  fontWeight: theme.typography.subtitle2.fontWeight,
  color: theme.palette.favCoinCard.title.color,
  marginBottom: 0,
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
}));
export const BackCardTitle = styled.p(({ theme }) => ({
  color: theme.palette.favCoinCard.subTitle.color,
  borderBottom: `.5px solid ${theme.palette.favCoinCard.border.color}`,
  marginBottom: 0,
  textAlign: "left",
}));
export const BackCardValue = styled.p(({}) => ({
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
}));
export const EmptyText = styled.p(({}) => ({
  width: "100%",
  textAlign: "center",
}));
