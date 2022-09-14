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
  justifyContent: "space-between",
  alignItems: "center",
  padding: 4,
  margin: 8,
  color: "white",
  marginBottom: 16,
}));

export const TableTitle = styled.p(({ theme }) => ({
  fontSize: theme.typography.table.fontSize,
}));

export const TableTitleName = styled.p(({ theme }) => ({
  fontSize: theme.typography.table.fontSize,
  marginLeft: "3rem",
}));

export const TableContent = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  flex: 9,
}));

export const TableContentChangePlus = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.success[600],
  borderBottom: `1px solid ${theme.palette.success[400]}`,
  borderRadius: 4,
  flex: 2,
  marginLeft: "3rem",
}));

export const TableContentChangeMinus = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.danger[600],
  borderBottom: `1px solid ${theme.palette.danger[400]}`,
  borderRadius: 4,
  flex: 2,
  marginLeft: "3rem",
}));

export const StarBtn = styled.div(({}) => ({
  cursor: "pointer",
}));

export interface TableContentProps {
  children?: JSX.Element | JSX.Element[] | any;
}

export const TableContentPrice = styled.p<TableContentProps>(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 4,
  textAlign: "center",
  padding: 2,
  width: 90,
}));
