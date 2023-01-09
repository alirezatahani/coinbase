import styled from "styled-components";

export const Container = styled.div(({ theme }) => ({
  "& .ant-pagination-options": {
    display: "none",
  },
  "& .ant-pagination": {
    backgroundColor: theme.palette.background.paper,
    width: "60%",
    margin: "0 auto",
    borderRadius: "5px",
    height:"28px"
  },
}));
