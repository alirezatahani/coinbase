import styled from "styled-components";

export const CoinListContainer = styled.div(() => ({
  marginTop: "1rem",
}));
export const CoinContent = styled.div(({theme}) => ({
  display: "flex",
  gap: "2rem",
  marginBottom: "1rem",
  color: theme.palette.common.white,
}));

