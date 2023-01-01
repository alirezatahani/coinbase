import styled from "styled-components";

export const CalculatorContainer = styled.div(() => ({
  "& .anticon": {
    width: "100%",
    margin: "1rem 0",
    fontSize: "1.2rem",
    // textAlign:"center",
  },
}));
export const InputRowContainer = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  "input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "input::-webkit-outer-spin-button": {
    " -webkit-appearance": "none",
    margin: 0,
  },
  "& .ant-select": {
    flex: 1,
  },
  "& .ant-select-selector": {
    color: "#fff !important",
    backgroundColor: `${theme.palette.primary.main} !important`,
    borderColor: `${theme.palette.border.color} !important`,
    height: "38px !important",
    borderLeft: "0 !important",
    borderRadius: "0 5px 5px 0 !important",
  },
  "& .ant-select-arrow": {
    color: "#fff",
  },
}));
export const Input = styled.input(({ theme }) => ({
  flex: 1.5,
  width: "100%",
  maxHeight: 30,
  fontSize: 18,
  fontWeight: "bolder",
  position: "relative",
  outline: 0,
  padding: "18px",
  backgroundColor: "transparent",
  border: "1px solid",
  borderColor: theme.palette.border.color,
  borderRadius: "5px 0 0 5px",
  "::placeholder": { color: theme.palette.success[400] },
  "&:focus": {
    boxShadow: "0 0 0 2px rgb(24 144 255 /20%)",
    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
  },
}));
