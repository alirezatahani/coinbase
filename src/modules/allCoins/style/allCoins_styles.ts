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
  flex: 3,
  textAlign: "start",
  marginLeft: "1rem",
}));

export const TableContentChangePlus = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.success[600],
  borderBottom: `1px solid ${theme.palette.success[400]}`,
  borderRadius: 4,
  flex: 1,
  marginLeft: "3rem",
}));

export const TableContentChangeMinus = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.danger[600],
  borderBottom: `1px solid ${theme.palette.danger[400]}`,
  borderRadius: 4,
  flex: 1,
  marginLeft: "3rem",
}));

export const ActionBtn = styled.div(({}) => ({
  cursor: "pointer",
  marginLeft: "3rem",
}));

export interface TableContentProps {
  children?: JSX.Element | JSX.Element[] | any;
}

export const TableContentPrice = styled.p<TableContentProps>(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  borderRadius: 4,
  textAlign: "inherit",
  padding: 2,
  width: 90,
  marginLeft: "3rem",
}));
