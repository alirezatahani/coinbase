import styled from "styled-components";

export const CoinContent = styled.div(({}) => ({
  display: "flex",
  gap: "2rem",
  marginBottom: "1rem",
  color: "white",
}));

export const CoinDesc = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  height: "100%",
  gap:".5rem",
  flex: 1.5,
}));
export const CoinName = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
}));



export const CoinNegetiveChange = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.success[600],
  borderBottom: `1px solid ${theme.palette.success[400]}`,
  borderRadius: 4,
  flex: 1,
}));

export const CoinPositiveChange = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.danger[600],
  borderBottom: `1px solid ${theme.palette.danger[400]}`,
  borderRadius: 4,
  flex: 1,
}));

export const FavBtn = styled.div(({}) => ({
  cursor: "pointer",
}));


