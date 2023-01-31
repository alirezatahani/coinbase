import styled from "styled-components";

export const TabContainer = styled.div(({ theme }) => ({
  "& .ant-tabs": {
    color: theme.palette.text.color,
  },
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
