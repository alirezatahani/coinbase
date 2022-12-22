import styled from "styled-components";

export const HomeStyle = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.color,
  color: theme.palette.text.color,
  textAlign: "center",
  width: 550,
  height: "auto",
  padding: "2rem",
}));
export const ActionbarContainer = styled.div(({ theme }) => ({
  marginBottom: "1rem",
  "& .ant-select-selector": {
    color: theme.palette.text.color,
    backgroundColor: "transparent !important",
    borderColor: `${theme.palette.border.color} !important`,
  },
  "& .ant-select-arrow": {
    color: theme.palette.text.color,
  },
  "& .ant-btn": {
    color: theme.palette.text.color,
    border: "1px solid",
    borderColor: theme.palette.border.color,
    backgroundColor: "transparent !important",
  },
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
  border: "1px solid",
  borderColor: theme.palette.border.color,
  color: theme.palette.text.color,
  "::placeholder": { color: theme.palette.success[400] },
  "&:focus": {
    boxShadow: "0 0 0 2px rgb(24 144 255 /20%)",
    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
  },
}));
