import styled from "styled-components";
import { CoinStatisticsRowProps } from "../content/coinDetail_types";

export const CoinStatisticsTitleContainer = styled.div(({ theme }) => ({
  color: theme.palette.success[400],
  textAlign: "start",
  marginBottom: "1rem",
}));
export const CoinStatisticsRowContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  color: theme.palette.common.white,
  padding: "0.4rem",
}));
export const CoinStatisticsRowTitleContainer = styled.div(({ theme }) => ({
  display: "flex",
  gap: "5px",
  alignItems: "center",
}));
export const CoinStatisticsTitle = styled.h2(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: "start",
}));
export const RowIconContainer = styled.span(({ theme }) => ({
  fontSize: "20px",
}));
export const RowValueContainer = styled.span(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
export const CoinStatisticsRow = styled.div<CoinStatisticsRowProps>(
  ({ theme, isLastRow }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: " 100%",
    padding: "0.5rem 1rem",
    borderBottom: isLastRow ? null : `1px solid ${theme.palette.common.white}`,
  })
);
