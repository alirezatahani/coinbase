import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
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
  marginBottom: "3rem",
}));

export const ArrowUpStyle = styled(ArrowUpOutlined)(({ theme }) => ({
  color: theme.palette.success.main,
  marginRight: "2%",
}));
export const ArrowDownStyle = styled(ArrowDownOutlined)(({ theme }) => ({
  color: theme.palette.danger.main,
  marginRight: "2%",
}));

export const TableContent = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  flex: 3,
  textAlign: "center",
  marginLeft: "1rem",
  padding: 4,
  margin: 0,
}));

export const ActionBtn = styled.div(({}) => ({
  cursor: "pointer",
  marginLeft: "3rem",
}));

export interface TableContentProps {
  children?: JSX.Element | JSX.Element[] | any;
}

export const CoinsStyle = styled.div(({}) => ({
  backgroundColor: "#11151e7d",
  borderRadius: 4,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  marginBottom: 10,
  color: "white",
}));

export const CoinDetailStyle = styled.div(({ theme }) => ({
  borderRadius: 4,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem",
  width: 290,
}));

export const CoinDetailWrapper = styled.div(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Item = styled.p(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  color: theme.palette.background.paper,
}));

export const SpinnerWrapper = styled.div(({}) => ({
  marginBottom: "2rem",
}));

export const Wrapper = styled.div(({}) => ({
  marginBottom: "2rem",
}));
