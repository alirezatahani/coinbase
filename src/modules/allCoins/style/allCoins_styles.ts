import styled from "styled-components";

export const CoinsStyle = styled.div(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  color: "white",
}));

export const TableTitle = styled.p(({ theme }) => ({
  fontSize: theme.typography.table.fontSize,
}));
export const TableContent = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
}));
