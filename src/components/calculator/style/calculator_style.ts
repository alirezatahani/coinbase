import styled from "styled-components";

export const InputRowContainer = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  "& .ant-select": {
    flex: 1,
  },
  "& .ant-select-selector": {
    color: "#fff !important",
    backgroundColor: `${theme.palette.primary.main} !important`,
    borderColor: `${theme.palette.border.color} !important`,
  },
  "& .ant-select-arrow": {
    color: "#fff",
  },
}));
export const Input = styled.input(({ theme }) => ({
  flex: 1.5,
  width: "100%",
  maxHeight: 30,
  fontSize: 16,
  position: "relative",
  outline: 0,
  padding: "15px",
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
