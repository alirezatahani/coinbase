import styled from "styled-components";

export const CoinsStyle = styled.div(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  marginBottom: 10,
  color: "white",
}));

export const TableContent = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  flex: 1,
  textAlign: "start",
  marginLeft: "1rem",
}));

export interface TableContentProps {
  children?: JSX.Element | JSX.Element[] | any;
}

export const TableContentPrice = styled.p<TableContentProps>(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  borderRadius: 4,
  textAlign: "start",
  padding: 2,
  width: 90,
  marginLeft: "3rem",
}));

export const TableContentChangePlus = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.success[600],
  borderBottom: `1px solid ${theme.palette.success[400]}`,
  borderRadius: 4,
  flex: 1,
  marginLeft: "3rem",
}));
