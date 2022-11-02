import styled from "styled-components";

export const HomeStyle = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  textAlign: "center",
  width: 550,
  height: "auto",
  padding: "2rem",
}));
export const FlexWrapperBadge = styled.div(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const Badge = styled.div(({}) => ({
  width: 20,
  height: 20,
  backgroundColor: "#04aa6d",
  textAlign: "center",
  borderRadius: "50%",
  color: "white",
  marginLeft: 6,
  fontSize: 13,
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
  "::placeholder": { color: theme.palette.success[400]},
  "&:focus": {
    border:0,
    borderBottom: "2px solid",
    borderRadius:0,
    fontSize: 18,
    width: "80%",
    borderBottomColor: theme.palette.success[200],
    transition: "all .3s",
  },
}));
