import styled from "styled-components";

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
export const EmptyText = styled.p(({}) => ({
  width: "100%",
  textAlign: "center",
}));

