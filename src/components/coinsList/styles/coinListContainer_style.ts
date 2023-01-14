import styled from "styled-components";

export const CoinListContainer = styled.div(() => ({
  marginTop: "1rem",
}));
export const NoResultText = styled.p(({theme}) => ({
  marginTop: "1rem",
  color:theme?.palette?.text?.color
}));


