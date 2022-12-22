import styled from "styled-components";

export const ActionbarContainer = styled.div(({ theme }) => ({
  marginBottom: "1rem",
  display: "flex",
  justifyContent: "center",
  "& .ant-select": {
    flex: 1,
  },
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
