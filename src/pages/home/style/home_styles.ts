import styled from "styled-components";

export const HomeStyle = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  textAlign: "center",
  width: 550,
  height: "auto",
  padding: "2rem",
  paddingBottom:"70px"
}));
export const Input = styled.input(({ theme }) => ({
  width: "100%",
  maxHeight: 30,
  borderRadius: "5px",
  fontSize: 16,
  position: "relative",
  outline: 0,
  marginBottom: "1rem",
  padding: "10px",
  backgroundColor: "transparent",
  border: "1px solid #fafafa3d",
  color: theme.palette.background.paper,
  "::placeholder": { color: theme.palette.success[400] },
  "&:focus": {
    border: "2px solid",
    transition: "all .3s",
  },
}));
