import styled from "styled-components";

export const CoinsStyle = styled.div(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  marginBottom: 10,
  color: "white",
}));

export const CoinsTitleStyle = styled.div(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 4,
  margin: 8,
  color: "white",
  marginBottom: 16,
}));

export const TableTitle = styled.p(({ theme }) => ({
  fontSize: theme.typography.table.fontSize,
}));

export const TableContent = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  flex: 1,
}));
export const StarBtn = styled.div(({}) => ({
  cursor: "pointer",
}));

export const TableContentPrice = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 4,
  textAlign: "center",
  padding: 2,
  width: 90,
}));
