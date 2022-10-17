import styled from "styled-components";

export const AlertStyle = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  textAlign: "center",
  width: 550,
  height: "auto",
  padding: "2rem",
}));
export const FormStyle = styled.div(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
}));
