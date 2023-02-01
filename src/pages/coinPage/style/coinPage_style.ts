import styled from "styled-components";

export const CoinDetailPage = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.color,
  color:theme.palette.text.color,
  display: "flex",
  justifyContent: "center",
  width: 550,
  minHeight: 170,
  maxHeight: 650,
  overflowY: "scroll",
  padding: "2rem",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.text.color,
    outline: `1px solid ${theme.palette.background.color}`,
    borderRadius: "5px",
  },
}));
